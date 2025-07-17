import { Component, HostListener, ElementRef } from '@angular/core';
import { DashboardLayout } from '../dashboard-layout/dashboard-layout';
import { PopupService } from '../popup-service/popup-service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  constructor(private eRef: ElementRef,
              private popupService: PopupService) 
              {}

  usedResumeEvaluator = false;
  usedCareerChatBot = false;
  usedSkillRoadmap = false;
  usedJDAnalyzer = false;

  resumeEvaluatorUsed() {
    this.usedResumeEvaluator = true;
  }
  careerChatbotUsed() {
    this.usedCareerChatBot = true;
  }
  skillRoadmapUsed() {
    this.usedSkillRoadmap = true;
  }
  jdAnalyzerUsed() {
    this.usedJDAnalyzer = true;
  }

  userName: string = '';
  ngOnInit() {
    const storedName = localStorage.getItem('username');
    this.userName = storedName ? storedName : 'User';
  }

  showResumeOptions = false;
  toggleResume() {
    this.showResumeOptions = !this.showResumeOptions;
  }

  @HostListener('document:click',['$event'])
  onClickOutside(event: MouseEvent) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.showResumeOptions = false;
    }
  }
  chooseOption(option: string) {
    if(option==='upload') {
      this.popupService.openUploadPopup();
    }
  }
}


