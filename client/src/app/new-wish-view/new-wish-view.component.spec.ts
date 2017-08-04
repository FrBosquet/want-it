import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWishViewComponent } from './new-wish-view.component';

describe('NewWishViewComponent', () => {
  let component: NewWishViewComponent;
  let fixture: ComponentFixture<NewWishViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWishViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWishViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
