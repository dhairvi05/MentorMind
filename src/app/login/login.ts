import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  @Output() close = new EventEmitter<void>();
  closePopup() {
    this.close.emit();
  }
  @Output() switch = new EventEmitter<void>();
  signup() {
    this.switch.emit();
  }
  @Output() login = new EventEmitter<void>();
  openLogin() {
    this.login.emit();
  }
  @Output() submit = new EventEmitter<boolean>();
  onLoginSubmit(form: NgForm) {
    if(!form.valid) {
      this.submit.emit(false);
      return;
    }
    else {
      alert("Login Successful");
      this.submit.emit(true);
    }
  }
}
