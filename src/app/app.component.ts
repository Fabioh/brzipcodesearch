import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import zipCode from './models/zipCode';
import { ZipCodeSearchService } from './zipcodesearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addressZipCode$: Observable<zipCode>;

  constructor(private service: ZipCodeSearchService) { }

  handleClick(zip: string) {
    this.addressZipCode$ = this.service.searchZipCode(zip);
  }
}
