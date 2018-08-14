import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnterpriseComponent } from './form-enterprise.component';

describe('FormEnterpriseComponent', () => {
  let component: FormEnterpriseComponent;
  let fixture: ComponentFixture<FormEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
