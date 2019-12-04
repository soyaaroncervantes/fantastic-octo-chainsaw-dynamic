import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifIconComponent } from './gif-icon.component';

describe('GifIconComponent', () => {
  let component: GifIconComponent;
  let fixture: ComponentFixture<GifIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
