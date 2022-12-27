import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { CreateShopComponent } from './components/shop/create-shop/create-shop.component';
import { UpdateShopComponent } from './components/shop/update-shop/update-shop.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ShopDetailsComponent } from './components/shop/shop-details/shop-details.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { CategoryDetailsComponent } from './components/category/category-details/category-details.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
const routes: Routes = [
  {path: 'shop', component: ShopListComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: 'shop/create', component: CreateShopComponent, pathMatch:'full'},
  {path: 'shop/:id', component: UpdateShopComponent, pathMatch:'full'},
  {path: 'product', component: ProductListComponent, pathMatch: 'full'},
  {path: 'shop/:id/product/create', component: CreateProductComponent, pathMatch: 'full'},
  {path: 'product/:id', component: UpdateProductComponent, pathMatch: 'full'},
  {path: 'category', component: CategoryListComponent, pathMatch: 'full'},
  {path: 'product/:id/category/create', component: CreateCategoryComponent, pathMatch: 'full'},
  {path: 'category/:id', component: UpdateCategoryComponent, pathMatch: 'full'},
  {path: 'shop/:id/detail',component: ShopDetailsComponent,pathMatch:'full'},
  {path: 'product/:id/detail',component: ProductDetailsComponent,pathMatch:'full'},
  {path: 'category/:id/detail',component: CategoryDetailsComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
