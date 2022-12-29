import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from 'src/app/models/shop';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements  AfterViewInit, OnChanges {

  displayedColumns: string[] = ['name', 'price', 'categories', 'description', 'actions'];
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
    this.productservice.delete(id).subscribe(() => {
      this.getProduct();
    })
  }

  addCategoryToProduct(id: number) {
    this.router.navigate([`product/${id}/category/create`]);
  }

  addProductToShop(id: number) {
    this.router.navigate([`/shop/${id}/product/create`]);
  }

  ngAfterViewInit() {
    this.products.paginator = this.paginator;
    this.products.filterPredicate = this.filterProducts;
  }

  private filterProducts(product: Product, filter: string): boolean {
    if (filter.length === 0) return true;
    const categoryString = product.categories.map((category: Category) => category.name.toLocaleLowerCase().trim()).join(' ');
    const categoryFilter = categoryString.length > 0 ?
      categoryString.indexOf(filter.toLocaleLowerCase().trim()) !== -1
      : true;

      console.log(filter.toLocaleLowerCase().trim());
      console.log(categoryString);
    return categoryFilter;
  }

}
