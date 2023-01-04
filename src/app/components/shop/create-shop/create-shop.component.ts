import { Component } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { Shop } from '../../../models/shop';
import { Router } from '@angular/router';
import { OpeningSchedule } from 'src/app/models/OpeningSchedule';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent {
  shop: Shop = new Shop();
  schedule:OpeningSchedule = new OpeningSchedule();

  constructor(private shopService: ShopService,
    private router: Router) { }



  goToEmployeeList() {
    this.router.navigate(['shop']);
  }

  save() {
    this.shop.schedule = this.schedule;
    this.shopService.save(this.shop).subscribe(() => {
      this.goToEmployeeList();
    });
  }

  onSubmit() {
    this.save();
  }
}
