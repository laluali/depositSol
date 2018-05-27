import { TestBed, inject } from '@angular/core/testing';

import { BackendService } from './backend.service';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';

describe('BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendService,
                  HttpClient,
                  CommonService
      ]
    });
  });

  it('should be created', inject([BackendService], (service: BackendService) => {
    expect(service).toBeTruthy();
  }));
});
