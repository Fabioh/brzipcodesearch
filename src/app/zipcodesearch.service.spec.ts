import { TestBed } from '@angular/core/testing';

import { ZipCodeSearchService } from './zipcodesearch.service';

describe('ZicodesearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipCodeSearchService = TestBed.get(ZipCodeSearchService);
    expect(service).toBeTruthy();
  });

  it('should return correct information of the zip code', () => {
    const service: ZipCodeSearchService = TestBed.get(ZipCodeSearchService);
    let sub = service.searchZipCode('05010000').subscribe((data) => {
      expect(data.zipCode).toEqual('05010000');
      expect(data.state).toEqual('SP');
      expect(data.city).toEqual('São Paulo');
      expect(data.street).toEqual('Praça da Sé');
      expect(data.neighborhood).toEqual('Sé');
    });
  });
});
