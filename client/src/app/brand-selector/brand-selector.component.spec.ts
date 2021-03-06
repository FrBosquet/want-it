import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSelectorComponent } from './brand-selector.component';

describe('BrandSelectorComponent', () => {
  let component: BrandSelectorComponent;
  let fixture: ComponentFixture<BrandSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
