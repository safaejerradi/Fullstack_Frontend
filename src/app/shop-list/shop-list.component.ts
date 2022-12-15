import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

  shops: Shop[];
  constructor(private shopService: ShopService,
    private router: Router) { }

  ngOnInit(): void {
    this.getShop();
  }

  private getShop() {
    this.shopService.findAll().subscribe(data => {
      this.shops = data;
    });
  }

  updateShop(id: number){
    this.router.navigate(['shop', id]);
  }
}
