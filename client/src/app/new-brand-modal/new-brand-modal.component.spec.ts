import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrandModalComponent } from './new-brand-modal.component';

describe('NewBrandModalComponent', () => {
  let component: NewBrandModalComponent;
  let fixture: ComponentFixture<NewBrandModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBrandModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBrandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
