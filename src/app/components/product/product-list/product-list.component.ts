import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[];
  constructor(private productservice: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct() {
    this.productservice.findAll().subscribe(data => {
      this.products = data;
    });
  }


}
