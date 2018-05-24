import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerPComponent } from './banner-p/banner-p.component';
import { NavEnmedioComponent } from './nav-enmedio/nav-enmedio.component';
import { FooterDonatonComponent } from './footer-donaton/footer-donaton.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerPComponent,
    NavEnmedioComponent,
    FooterDonatonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
