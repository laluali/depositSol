import { TestBed, inject } from '@angular/core/testing';

import { IssueCardService } from './issue-card.service';

describe('IssueCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueCardService]
    });
  });

  it('should be created', inject([IssueCardService], (service: IssueCardService) => {
    expect(service).toBeTruthy();
  }));
});
