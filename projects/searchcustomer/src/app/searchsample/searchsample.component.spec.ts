import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSampleComponent } from './searchsample.component';

describe('SearchSampleComponent', () => {
  let component: SearchSampleComponent;
  let fixture: ComponentFixture<SearchSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
