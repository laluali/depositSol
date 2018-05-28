import { TestBed, inject } from '@angular/core/testing';

import { OpenIssueService } from './open-issue.service';

describe('OpenIssueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenIssueService]
    });
  });

  it('should be created', inject([OpenIssueService], (service: OpenIssueService) => {
    expect(service).toBeTruthy();
  }));
});
