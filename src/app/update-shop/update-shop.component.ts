import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.component.html',
  styleUrls: ['./update-shop.component.css']
})
export class UpdateShopComponent implements OnInit {
  id: number;
  shop: Shop = new Shop();

  constructor(private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.shopService.findById(this.id).subscribe(data => this.shop = data);
  }

  onSubmit() {
    this.shopService.update(this.id, this.shop).subscribe(() =>
      this.goToEmployeeList());
  }

  goToEmployeeList(){
    this.router.navigate(['shops']);
  }
}
