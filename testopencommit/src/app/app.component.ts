import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="title"></app-header>
    <input [(ngModel)]="title">
    <app-footer *ngIf="footerTitle | async as t" [title]="t"></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testopencommit';
  footerTitle: Observable<string> | null = null;
  constructor() {
  }
  ngOnInit(): void {
    this.footerTitle = of('ciao come va');
  }
}
