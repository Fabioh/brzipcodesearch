import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import * as cep from 'cep-promise';
import zipCode from './models/zipCode';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeSearchService {

  constructor() { }

  searchZipCode(zip: string): Observable<zipCode> {

    return from(
      cep(zip)
    )
    .pipe(
      delay(5000)
    )
    .pipe<zipCode>(
      map(x => {
        const ret = new zipCode();
        ret.zipCode = x.cep;
        ret.city = x.city;
        ret.neighborhood = x.neighborhood;
        ret.street = x.street;
        ret.state = x.state;
        return ret;
      })
    );
  }
}
