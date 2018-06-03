import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkRepoComponent } from './fork-repo.component';
import {ForkRepoService} from './fork-repo.service';
import {BackendService} from '../../../services/backend.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {CommonService} from '../../../services/common.service';
import {AppService} from '../../../app.service';
import {dsImage} from '../../../constants/global.constant';

describe('ForkRepoComponent', () => {
  let component: ForkRepoComponent;
  let fixture: ComponentFixture<ForkRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkRepoComponent ],
      providers: [ ForkRepoService, BackendService, CommonService, AppService, HttpClient, HttpHandler ]
    })
    .compileComponents().then(() => {
    } );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isDisabled).toBeDefined();
    expect(component.forkImg).toEqual(dsImage.fork);
  });
});
