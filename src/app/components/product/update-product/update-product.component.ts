import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  product: Product = new Product();

  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productservice.findById(this.id).subscribe(data => this.product = data,
      (error) => { 
        this.errorHandler.set(error);
        this.errorHandler.handleError(); 
      });
  }

  onSubmit() {
    this.productservice.update(this.id, this.product).subscribe(() =>
      this.goToProductList(),
      (error) => { 
        this.errorHandler.set(error);
        this.errorHandler.handleError(); 
      });
  }

  goToProductList(){
    this.location.back();
  }

}
