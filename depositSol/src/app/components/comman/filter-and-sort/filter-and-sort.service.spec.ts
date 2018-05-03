import { TestBed, inject } from '@angular/core/testing';

import { FilterAndSortService } from './filter-and-sort.service';

describe('FilterAndSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterAndSortService]
    });
  });

  it('should be created', inject([FilterAndSortService], (service: FilterAndSortService) => {
    expect(service).toBeTruthy();
  }));
});
