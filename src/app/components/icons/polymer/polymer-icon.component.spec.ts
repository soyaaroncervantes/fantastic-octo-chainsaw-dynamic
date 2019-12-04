import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymerIconComponent } from './polymer-icon.component';

describe('PolymerIconComponent', () => {
  let component: PolymerIconComponent;
  let fixture: ComponentFixture<PolymerIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolymerIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolymerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
