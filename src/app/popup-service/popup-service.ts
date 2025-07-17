import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-popup-service',
  standalone: false,
  templateUrl: './popup-service.html',
  styleUrls: ['./popup-service.css']
})
@Injectable({providedIn: 'root'})
export class PopupService {
  private uploadPopup = new BehaviorSubject<boolean>(false);
  uploadPopup$ = this.uploadPopup.asObservable();
  openUploadPopup() {
    this.uploadPopup.next(true);
  }
  closeUploadPopup() {
    this.uploadPopup.next(false);
  }
}
