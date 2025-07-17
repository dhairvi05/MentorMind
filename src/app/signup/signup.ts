import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  constructor(private router: Router) {}
  
  @Output() close = new EventEmitter<void>();
  closePopup() {
    this.close.emit();
  }
  @Output() login = new EventEmitter<void>();
  openLogin() {
    this.login.emit();
  }
  @Output() submit = new EventEmitter<boolean>();

  onSignupSubmit(form: NgForm) {
    if(!form.valid) {
      this.submit.emit(false);
      return;
    }
    const name = form.value.name;
    localStorage.setItem('username',name);
    this.router.navigate(['/dashboard']);
    const { password, confirm } = form.value;
    if(password!=confirm) {
      alert("Password and confirm password do not match");
      this.submit.emit(false);
      return;
    }
    else {
      alert("New account created");
      this.submit.emit(true);
    }
    
  }
  @Output() onCreate = new EventEmitter<void>();
  triggerDashboard() {
    this.onCreate.emit();
  }
}
