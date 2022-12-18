import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../../../models/shop';
import { ShopService } from '../../../services/shop.service';
import { RouterModule, Routes ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

  shops: Shop[];
  constructor(private shopService: ShopService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getShops();
  }

  private getShops() {
    this.shopService.findAll().subscribe(data => {
      this.shops = data;
    });
  }

  updateShop(id: number){
    this.router.navigate(['shop', id]);
  }

  deleteShop(id: number){
    this.shopService.delete(id).subscribe( data => {
      console.log(data);
      this.getShops();
    })
  }

  addProductToShop(id: number) {
    this.router.navigate([`${id}/product/create`], { relativeTo: this.route });
  }
}
