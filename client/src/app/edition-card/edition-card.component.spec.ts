import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionCardComponent } from './edition-card.component';

describe('EditionCardComponent', () => {
  let component: EditionCardComponent;
  let fixture: ComponentFixture<EditionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
