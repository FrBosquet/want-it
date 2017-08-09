import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBulletComponent } from './user-bullet.component';

describe('UserBulletComponent', () => {
  let component: UserBulletComponent;
  let fixture: ComponentFixture<UserBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
