import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAndSortComponent } from './filter-and-sort.component';
import {BackendService} from '../../../services/backend.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {CommonService} from '../../../services/common.service';

describe('FilterAndSortComponent', () => {
  let component: FilterAndSortComponent;
  let fixture: ComponentFixture<FilterAndSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAndSortComponent ],
      providers: [ BackendService, HttpClient, HttpHandler, CommonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAndSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
