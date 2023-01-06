import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { OpeningSchedule } from 'src/app/models/OpeningSchedule';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { Shop } from '../../../models/shop';
import { ShopService } from '../../../services/shop.service';

@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.component.html',
  styleUrls: ['./update-shop.component.css']
})
export class UpdateShopComponent implements OnInit {
  id: number;
  shop: Shop = new Shop();
  schedule:OpeningSchedule = new OpeningSchedule();

  constructor(private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.shopService.findById(this.id).subscribe(data => {
      this.shop = data; 
      this.schedule = data.schedule;
    },
    (error) => { 
      this.errorHandler.set(error);
      this.errorHandler.handleError(); 
    });
  }

  onSubmit() {
    this.shop.schedule = this.schedule;
    this.shopService.update(this.id, this.shop).subscribe(() =>
      this.goToEmployeeList()
      ,
      (error) => { 
        this.errorHandler.set(error);
        this.errorHandler.handleError(); 
      });
  }

  goToEmployeeList(){
    this.router.navigate(['shop']);
  }
}
