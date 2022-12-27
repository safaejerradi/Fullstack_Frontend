import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from 'src/app/models/shop';
import { ProductService } from 'src/app/services/product.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  
  id: number;
  shop : Shop;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService,
    private productService: ProductService){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.shop = new Shop ();
      this.shopService.findById(this.id).subscribe( data => {
        this.shop = data;
      });
  }

}
