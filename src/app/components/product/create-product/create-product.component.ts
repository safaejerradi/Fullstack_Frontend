import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productservice: ProductService,
    private router: Router
    ,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.product.shop_id = this.route.snapshot.params['id'];
  }

  goToProductList() {
    this.router.navigate(['products']);
  }

  save() {
    this.productservice.save(this.product).subscribe(data => {
      console.log(data);
      this.goToProductList();
    });
  }

  onSubmit() {
    this.save();
  }

}
