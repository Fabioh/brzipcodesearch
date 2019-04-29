import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './app.component';
import { ZipCodeSearchService } from './zipcodesearch.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ZipCodeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
