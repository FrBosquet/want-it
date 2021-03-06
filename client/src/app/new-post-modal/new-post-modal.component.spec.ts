import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostModalComponent } from './new-post-modal.component';

describe('NewPostModalComponent', () => {
  let component: NewPostModalComponent;
  let fixture: ComponentFixture<NewPostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
