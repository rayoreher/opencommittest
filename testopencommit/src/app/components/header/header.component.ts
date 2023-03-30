import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>{{title}}</div>
    <div>{{ count }}</div>
    <button (click)="change()">Change!</button>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  count = 0;
  @Input() title! : string;
  change() {
    this.count++;
  }
}
