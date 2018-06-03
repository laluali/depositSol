import { TestBed, inject } from '@angular/core/testing';

import { IssueCardService } from './issue-card.service';
import {BackendService} from '../../../services/backend.service';

describe('IssueCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueCardService, BackendService]
    });
  });

  it('should be created', inject([IssueCardService], (service: IssueCardService) => {
    expect(service).toBeTruthy();
  }));
});
