import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatProductComponent } from './creat-product.component';

describe('CreatProductComponent', () => {
  let component: CreatProductComponent;
  let fixture: ComponentFixture<CreatProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
