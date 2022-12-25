import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent  {

  product: Product = new Product();

  constructor(private productservice: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }
  

  goToProductList() {
    this.router.navigate(['shop', this.route.snapshot.params['id'], 'detail']);
  }

  save() {
    this.productservice.save(this.product, this.route.snapshot.params['id']).subscribe(() => {
      this.goToProductList();
    });
  }

  onSubmit() {
    this.save();
  }

}
