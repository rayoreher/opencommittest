import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'testopencommit'`, () => {
    expect(component.title).toEqual('testopencommit');
  });

  it('should render app-header with title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const appHeader = compiled.querySelector('app-header');
    expect(appHeader).not.toBeNull();
    expect(appHeader.getAttribute('ng-reflect-title')).toEqual('testopencommit');
  });

  it('should update title when input changes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    input.value = 'New Title';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.title).toEqual('New Title');
  });
});
