import { Component } from '@angular/core';

interface Link {
  platform: string;
  url: string;
}

@Component({
  selector: 'app-links',
  standalone: false,
  templateUrl: './links.html',
  styleUrls: ['./links.css']
})
export class Links {
  links: Link[] = [
    { platform: '', url: '' }
  ];
  addLink() {
    this.links.push({platform: '', url: ''});
  }
  removeLink(index: number) {
    this.links.splice(index, 1);
  }
}
