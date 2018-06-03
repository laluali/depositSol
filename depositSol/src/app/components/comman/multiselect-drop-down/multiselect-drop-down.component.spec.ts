import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectDropDownComponent } from './multiselect-drop-down.component';
import {CUSTOM_ELEMENTS_SCHEMA, Pipe} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../../../pipe/filter.pipe';

describe('MultiselectDropDownComponent', () => {
  let component: MultiselectDropDownComponent;
  let fixture: ComponentFixture<MultiselectDropDownComponent>;
  let list: any = [{'name': 'name1'}, {'name': 'name2'}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MultiselectDropDownComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FilterPipe]
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

  xit('Remove Selection', function() {
    expect(component.removeSelection(list[0])).toBeDefined();
  });
});
