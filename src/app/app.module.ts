import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZipcodesearchService } from './zipcodesearch.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZipcodesearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
