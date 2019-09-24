import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneComponentComponent } from './plane-component.component';

describe('PlaneComponentComponent', () => {
  let component: PlaneComponentComponent;
  let fixture: ComponentFixture<PlaneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
