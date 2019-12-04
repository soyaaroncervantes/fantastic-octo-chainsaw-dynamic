import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentConfigComponent } from './dynamic-component-config.component';

describe('DynamicComponentConfigComponent', () => {
  let component: DynamicComponentConfigComponent;
  let fixture: ComponentFixture<DynamicComponentConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
