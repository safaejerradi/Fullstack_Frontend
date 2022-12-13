import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shops : Shop[];
 constructor(private shopService: ShopService){}

 ngOnInit(): void {
  this.getShop();
 }

 private getShop(){
  this.shopService.getShop().subscribe(data => {
    this.shops = [data];
  });
}
}
