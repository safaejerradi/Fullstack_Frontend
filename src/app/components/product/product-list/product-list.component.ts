import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from 'src/app/models/shop';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements  AfterViewInit, OnChanges {

  displayedColumns: string[] = ['name', 'price', 'description', 'actions'];
  displayedFooterColumns: string[] = ['name'];
  products = new MatTableDataSource<Product>();
  @Input() shop: Shop;
  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(
    private productservice: ProductService,
    private router: Router,
     private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['shop'] && !changes['shop'].firstChange) this.getProduct();
  }

  private getProduct() {
    this.productservice.findByShopId(this.shop.id).subscribe(data => {
      this.products.data = data;
    });

  }

  updateProduct(id: number) {
    this.router.navigate(['product', id]);
  }

  productDetails(id: number) {
    this.router.navigate(['product-details', id]);
  }

  deleteProduct(id: number) {
    this.productservice.delete(id).subscribe(data => {
      this.getProduct();
    })
  }

  addCategoryToProduct(id: number) {
    this.router.navigate([`${id}/category/create`], { relativeTo: this.route });
  }

  addProductToShop(id: number) {
    this.router.navigate([`/shop/${id}/product/create`]);
  }

  ngAfterViewInit() {
    this.products.paginator = this.paginator;
  }

}
