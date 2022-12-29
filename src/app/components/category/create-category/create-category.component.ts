import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = new Category();
  product_id: number;

  constructor(
    private categoryservice: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['id'];
  }

  goToCategoryList() {
    this.router.navigate(['shop', this.route.snapshot.params['id'], 'detail']);
  }

  save() {
    this.categoryservice.save(this.category, this.product_id).subscribe(() => {
      this.goToCategoryList();
    });
  }

  onSubmit() {
    this.save();
  }


}
