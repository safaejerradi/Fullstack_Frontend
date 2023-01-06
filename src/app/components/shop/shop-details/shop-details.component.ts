import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Shop } from 'src/app/models/shop';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  
  id: number;
  shop : Shop;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private errorHandler: ErrorHandlerService){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.shop = new Shop ();
      this.shopService.findById(this.id).subscribe( data => {
        this.shop = data;
      },
      (error) => { 
        this.errorHandler.set(error);
        this.errorHandler.handleError(); 
      });
  }

}
