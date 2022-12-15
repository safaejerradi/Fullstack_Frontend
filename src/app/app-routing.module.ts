import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { UpdateShopComponent } from './update-shop/update-shop.component';

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
