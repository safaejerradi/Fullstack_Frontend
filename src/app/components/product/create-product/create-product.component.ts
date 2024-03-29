import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent  {

  product: Product = new Product();

  constructor(private productservice: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService) { }
  


  save() {
    this.productservice.save(this.product, this.route.snapshot.params['id']).subscribe(() => {
      this.goToProductList();
    },
    (error) => { 
      this.errorHandler.set(error);
      this.errorHandler.handleError(); 
    });
  }

  onSubmit() {
    this.save();
  }

  goToProductList(){
    this.router.navigate(['shop', this.route.snapshot.params['id'], 'detail']);
  }

}
