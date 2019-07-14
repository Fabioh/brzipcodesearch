import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import * as cep from 'cep-promise';
import ZipCode from 'src/app/models/zipCode';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeSearchService {

  constructor() { }

  searchZipCode(zip: string): Observable<ZipCode> {

    return from(
      cep(zip)
    )
    // .pipe(
    //   delay(5000)
    // )
    .pipe<ZipCode>(
      map(x => {
        return new ZipCode(
          x.cep,
          x.state,
          x.city,
          x.street,
          x.neighborhood
        );
      })
    );
  }
}
