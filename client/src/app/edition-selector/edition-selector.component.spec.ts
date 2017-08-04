import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionSelectorComponent } from './edition-selector.component';

describe('EditionSelectorComponent', () => {
  let component: EditionSelectorComponent;
  let fixture: ComponentFixture<EditionSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
