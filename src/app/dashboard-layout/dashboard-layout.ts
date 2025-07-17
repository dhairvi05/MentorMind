import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup-service/popup-service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: false,
  templateUrl: './dashboard-layout.html',
  styleUrls: ['./dashboard-layout.css'],
})
export class DashboardLayout implements OnInit{
  uploadPopup = false;
  constructor(private popupService: PopupService) {}
  ngOnInit() {
    this.popupService.uploadPopup$.subscribe(value=> {
      this.uploadPopup = value;
    });
  }
  closePopup() {
    this.popupService.closeUploadPopup();
  }
  handleNext(data: string) {
    console.log("Resume data: ",data);
    this.popupService.closeUploadPopup();
  }
}
