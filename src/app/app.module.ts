import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { HttpClientModule }  from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
