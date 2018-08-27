import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserNavbarComponent } from './profile-user-navbar.component';

describe('ProfileUserNavbarComponent', () => {
  let component: ProfileUserNavbarComponent;
  let fixture: ComponentFixture<ProfileUserNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUserNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
