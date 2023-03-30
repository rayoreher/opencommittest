import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize count variable to zero', () => {
    expect(component.count).toEqual(0);
  });

  it('should increment count variable on button click', () => {
    component.change();
    expect(component.count).toEqual(1);
  });

  it('should display the count variable correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div:nth-child(2)').textContent).toContain(component.count);
  });

  it('should receive the title from parent component', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div:nth-child(1)').textContent).toContain('Test Title');
  });
});
