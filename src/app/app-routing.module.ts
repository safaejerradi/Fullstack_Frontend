import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { CreateShopComponent } from './components/shop/create-shop/create-shop.component';
import { UpdateShopComponent } from './components/shop/update-shop/update-shop.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ShopDetailsComponent } from './components/shop/shop-details/shop-details.component';
const routes: Routes = [
  {path: 'shops', component: ShopListComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'shops', pathMatch: 'full'},
  {path: 'shop/create', component: CreateShopComponent},
  {path: 'shop/:id', component: UpdateShopComponent},
  {path: 'products', component: ProductListComponent, pathMatch: 'full'},
  {path: 'shops/:id/product/create', component: CreateProductComponent, pathMatch: 'full'},
  {path: 'product/:id', component: UpdateProductComponent, pathMatch: 'full'},
  {path: 'categories', component: CategoryListComponent, pathMatch: 'full'},
  {path: 'products/:id/category/create', component: CreateCategoryComponent, pathMatch: 'full'},
  {path: 'category/:id', component: UpdateCategoryComponent, pathMatch: 'full'},
  {path: 'shop-details/:id',component: ShopDetailsComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
