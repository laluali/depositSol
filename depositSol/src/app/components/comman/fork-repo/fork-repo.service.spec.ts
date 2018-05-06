import { TestBed, inject } from '@angular/core/testing';

import { ForkRepoService } from './fork-repo.service';

describe('ForkRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForkRepoService]
    });
  });

  it('should be created', inject([ForkRepoService], (service: ForkRepoService) => {
    expect(service).toBeTruthy();
  }));
});
