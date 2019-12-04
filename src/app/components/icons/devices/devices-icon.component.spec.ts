import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesIconComponent } from './devices-icon.component';

describe('DevicesIconComponent', () => {
  let component: DevicesIconComponent;
  let fixture: ComponentFixture<DevicesIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
