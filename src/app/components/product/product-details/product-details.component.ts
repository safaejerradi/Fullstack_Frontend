import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product
  id :number
  constructor(private route : ActivatedRoute,
     private productservice : ProductService,
     private errorHandler: ErrorHandlerService){}
  ngOnInit(){
   this.id = this.route.snapshot.params['id'];
   this.product = new Product();
   this.productservice.findById(this.id).subscribe( data => {
    this.product = data;
  },
  (error) => { 
    this.errorHandler.set(error);
    this.errorHandler.handleError(); 
  });
  }

}
