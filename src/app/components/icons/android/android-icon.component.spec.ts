import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidIconComponent } from './android-icon.component';

describe('AndroidIconComponent', () => {
  let component: AndroidIconComponent;
  let fixture: ComponentFixture<AndroidIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
