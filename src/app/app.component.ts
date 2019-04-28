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

  showResult = false;

  constructor(private service: ZipCodeSearchService) { }

  handleClick(zip: string) {
    this.showResult = true;
    this.addressZipCode$ = this.service.searchZipCode(zip);
  }
}
