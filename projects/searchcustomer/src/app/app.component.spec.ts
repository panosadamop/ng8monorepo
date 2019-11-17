import { TestBed, async } from '@angular/core/testing';
import { SearchCustomerComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchCustomerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchCustomerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'searchcustomer'`, () => {
    const fixture = TestBed.createComponent(SearchCustomerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('searchcustomer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchCustomerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('searchcustomer app is running!');
  });
});
