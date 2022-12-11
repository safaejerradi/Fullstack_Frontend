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
  this.getShops();
 }

 private getShops(){
  this.shopService.getShopsList().subscribe(data => {
    this.shops = data;
  });
/*  this.shops = [{
    "id": 1,
    "name": "shop",
    "closed":true

  }]*/
}
}
