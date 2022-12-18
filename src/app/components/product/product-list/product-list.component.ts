import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[];
  constructor(private productservice: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct() {
    this.productservice.findAll().subscribe(data => {
      this.products = data;
    });

  }
  updateProduct(id: number){
    this.router.navigate(['product', id]);
  }

  deleteProduct(id: number){
    this.productservice.delete(id).subscribe( data => {
      console.log(data);
      this.getProduct();
    })
  }
  addCategoryToProduct(id: number) {
    this.router.navigate([`${id}/category/create`], { relativeTo: this.route });
  }


}
