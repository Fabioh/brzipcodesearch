import { TestBed } from '@angular/core/testing';

import { ZipCodeSearchService } from './zipcodesearch.service';

describe('ZicodesearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipCodeSearchService = TestBed.get(ZipCodeSearchService);
    expect(service).toBeTruthy();
  });
});
