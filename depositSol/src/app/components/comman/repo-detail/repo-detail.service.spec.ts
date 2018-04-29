import { TestBed, inject } from '@angular/core/testing';

import { RepoDetailService } from './repo-detail.service';

describe('RepoDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoDetailService]
    });
  });

  it('should be created', inject([RepoDetailService], (service: RepoDetailService) => {
    expect(service).toBeTruthy();
  }));
});
