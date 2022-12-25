import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Shop } from 'src/app/models/shop';
import { ProductService } from 'src/app/services/product.service';
import { ShopService } from 'src/app/services/shop.service';

import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name'];
  id: number;
  shop : Shop;
  products = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator

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
      this.productService.findByShopId(this.id).subscribe( data => {
        this.products.data = data;
      });
  }

  ngAfterViewInit() {
    this.products.paginator = this.paginator;
  }

  addProductToShop(id: number) {
    this.router.navigate([`/shop/${id}/product/create`]);
  }

}
