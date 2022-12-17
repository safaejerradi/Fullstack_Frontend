import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { CreateShopComponent } from './components/shop/create-shop/create-shop.component';
import { UpdateShopComponent } from './components/shop/update-shop/update-shop.component';

const routes: Routes = [
  {path: 'shops', component: ShopListComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'shops', pathMatch: 'full'},
  {path: 'shop/create', component: CreateShopComponent},
  {path: 'shop/:id', component: UpdateShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
