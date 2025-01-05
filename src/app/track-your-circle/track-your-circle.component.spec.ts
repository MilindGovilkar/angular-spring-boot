import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackYourCircleComponent } from './track-your-circle.component';

describe('TrackYourCircleComponent', () => {
  let component: TrackYourCircleComponent;
  let fixture: ComponentFixture<TrackYourCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackYourCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackYourCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
