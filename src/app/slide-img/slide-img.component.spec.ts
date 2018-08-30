import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideImgComponent } from './slide-img.component';

describe('SlideImgComponent', () => {
  let component: SlideImgComponent;
  let fixture: ComponentFixture<SlideImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
