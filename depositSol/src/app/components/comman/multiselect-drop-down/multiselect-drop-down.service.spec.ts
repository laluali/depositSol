import { TestBed, inject } from '@angular/core/testing';

import { MultiselectDropDownService } from './multiselect-drop-down.service';

describe('MultiselectDropDownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiselectDropDownService]
    });
  });

  it('should be created', inject([MultiselectDropDownService], (service: MultiselectDropDownService) => {
    expect(service).toBeTruthy();
  }));
});
