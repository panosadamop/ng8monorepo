import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSampleComponent } from './positionsample.component';

describe('PositionsampleComponent', () => {
  let component: PositionSampleComponent;
  let fixture: ComponentFixture<PositionSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
