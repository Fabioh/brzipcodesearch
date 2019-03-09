import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZipCodeSearchService } from './zipcodesearch.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZipCodeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
