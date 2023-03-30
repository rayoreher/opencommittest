import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="title"></app-header>
    <input [(ngModel)]="title">
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testopencommit';
  constructor() {
  }
}
