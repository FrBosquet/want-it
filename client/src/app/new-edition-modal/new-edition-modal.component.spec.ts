import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditionModalComponent } from './new-edition-modal.component';

describe('NewEditionModalComponent', () => {
  let component: NewEditionModalComponent;
  let fixture: ComponentFixture<NewEditionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
