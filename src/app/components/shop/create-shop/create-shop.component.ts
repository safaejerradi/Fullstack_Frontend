import { Component } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { Shop } from '../../../models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent {
  shop: Shop = new Shop();

  constructor(private shopService: ShopService,
    private router: Router) { }



  goToEmployeeList() {
    this.router.navigate(['shop']);
  }

  save() {
    this.shopService.save(this.shop).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    });
  }

  onSubmit() {
    this.save();
  }
}
