import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import zipCode from './models/zipCode';
import { ZipcodesearchService } from './zipcodesearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  // addressZipCode$: Observable<zipCode>;

  private subscription: Subscription;

  addressZipCodeService = {
    data: {},
    ready: false,
    loading: false
  };

  constructor(private service: ZipcodesearchService) { }

  handleClick(zip: string) {

    this.addressZipCodeService.loading = true;

    this.subscription =
      this.service.searchZipCode(zip)
      .subscribe((data) => {
          this.addressZipCodeService.loading = false;
          this.addressZipCodeService.ready = true;
          this.addressZipCodeService.data =  data;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
