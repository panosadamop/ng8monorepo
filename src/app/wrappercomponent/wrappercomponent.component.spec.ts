import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappercomponentComponent } from './wrappercomponent.component';

describe('WrappercomponentComponent', () => {
  let component: WrappercomponentComponent;
  let fixture: ComponentFixture<WrappercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrappercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
