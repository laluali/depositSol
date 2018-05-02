import { TestBed, inject } from '@angular/core/testing';

import { StarRepoService } from './star-repo.service';

describe('StarRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarRepoService]
    });
  });

  it('should be created', inject([StarRepoService], (service: StarRepoService) => {
    expect(service).toBeTruthy();
  }));
});
