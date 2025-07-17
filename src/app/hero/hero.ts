import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {
  @Output() openSignup = new EventEmitter<void>();
  triggerSignup() {
    this.openSignup.emit();
  }
}
