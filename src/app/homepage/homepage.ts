import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  constructor(private router: Router){}

  protected title = 'MentorMind';
  isSignupOpen = false;
  @Output() triggerSignup = new EventEmitter();
  openSignup() {
    this.isSignupOpen = true;
  }
  closeSignup() {
    this.isSignupOpen = false;
  }
  isLoginOpen = false;
  openLogin() {
    this.closeSignup();
    this.isLoginOpen = true;
  }
  closeLogin() {
    this.isLoginOpen = false;
  }
  switchToLogin() {
    this.closeSignup();
    this.openLogin();
  }
  switchToSignup() {
    this.closeLogin();
    this.openSignup();
  }
  onSignupSubmit(isValid: boolean) {
    if (!isValid) return; // stop here if form was invalid
    this.closeSignup();
    this.router.navigate(['/home']);
  }
  onLoginSubmit(isValid: boolean) {
    if(!isValid) return;
    this.closeLogin();
    this.router.navigate(['/home']);
  }
}
