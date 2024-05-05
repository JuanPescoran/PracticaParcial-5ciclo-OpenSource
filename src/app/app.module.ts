import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavegationBarComponent } from './public/components/navegation-bar/navegation-bar.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import { CardBundleComponent } from './store/components/card-bundle/card-bundle.component';
import { BundleListComponent } from './store/pages/bundle-list/bundle-list.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NavegationBarComponent,
    PageNotFoundComponent,
    CardBundleComponent,
    BundleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatAnchor
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
