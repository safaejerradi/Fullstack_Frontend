import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateShopComponent } from './components/shop/create-shop/create-shop.component'
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { UpdateShopComponent } from './components/shop/update-shop/update-shop.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ShopDetailsComponent } from './components/shop/shop-details/shop-details.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { CategoryDetailsComponent } from './components/category/category-details/category-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FilterByPipe } from './pipes/filter-by-pipe';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { getFrPaginatorIntl } from './fr-paginator-intl';


@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    CreateShopComponent,
    UpdateShopComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    ShopDetailsComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl, useValue: getFrPaginatorIntl()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
