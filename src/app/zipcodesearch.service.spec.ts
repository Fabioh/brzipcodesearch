import { TestBed } from '@angular/core/testing';

import { ZipcodesearchService } from './zipcodesearch.service';

describe('ZicodesearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipcodesearchService = TestBed.get(ZipcodesearchService);
    expect(service).toBeTruthy();
  });
});
