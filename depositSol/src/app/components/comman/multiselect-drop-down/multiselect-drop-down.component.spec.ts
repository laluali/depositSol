import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectDropDownComponent } from './multiselect-drop-down.component';

describe('MultiselectDropDownComponent', () => {
  let component: MultiselectDropDownComponent;
  let fixture: ComponentFixture<MultiselectDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
