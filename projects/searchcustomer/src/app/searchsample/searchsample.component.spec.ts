import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsampleComponent } from './searchsample.component';

describe('SearchsampleComponent', () => {
  let component: SearchsampleComponent;
  let fixture: ComponentFixture<SearchsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
