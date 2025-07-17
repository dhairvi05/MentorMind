import { Component, EventEmitter, Output } from '@angular/core';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min?url';

GlobalWorkerOptions.workerSrc = workerSrc;

@Component({
  selector: 'app-upload-resume',
  standalone: false,
  templateUrl: './upload-resume.html',
  styleUrls: ['./upload-resume.css']
})
export class UploadResume {
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<string>();

  fileName: string='';
  extractedText: string='';

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if(file && file.type === 'application/pdf') {
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = async () => {
        const typedArray = new Uint8Array(reader.result as ArrayBuffer);
        const pdf = await getDocument({data: typedArray}).promise;
        let fullText = '';
        for(let i=1;i<=pdf.numPages;i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item: any)=>item.str).join(' ');
          fullText += pageText + '\n';
        }
        this.extractedText = fullText.trim();
        console.log("Extracted Text: ", this.extractedText);
      };
      reader.readAsArrayBuffer(file);
    }
    else {
      alert("Please upload a valid PDF file.");
    }
  }
  onNext() {
    console.log("Extracted text onNext(): ", this.extractedText);
    if(this.extractedText) {
      this.next.emit(this.extractedText);
      this.close.emit();
    }
    else {
      alert("PDF still uploading");
    }
  }
}
