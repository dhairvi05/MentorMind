import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  @Output() openSignup = new EventEmitter<void>();
  triggerSignup() {
    this.openSignup.emit();
  }
}
