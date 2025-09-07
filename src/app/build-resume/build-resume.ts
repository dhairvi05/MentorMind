import { Component } from '@angular/core';

@Component({
  selector: 'app-build-resume',
  standalone: false,
  templateUrl: './build-resume.html',
  styleUrls: ['./build-resume.css']
})
export class BuildResume {
  expandedSet = new Set<number>();
  toggle(index: number) {
    if(this.expandedSet.has(index)) {
      this.expandedSet.delete(index);
    }
    else {
      this.expandedSet.add(index);
    }
  }
  isExpanded(index: number) {
    return this.expandedSet.has(index);
  }
}
