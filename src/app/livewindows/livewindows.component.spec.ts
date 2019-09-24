import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivewindowsComponent } from './livewindows.component';

describe('LivewindowsComponent', () => {
  let component: LivewindowsComponent;
  let fixture: ComponentFixture<LivewindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivewindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivewindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
