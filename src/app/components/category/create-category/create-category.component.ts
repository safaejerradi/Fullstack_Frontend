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

  constructor(private categoryservice: CategoryService,
    private router: Router
    ,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.category.product_id = this.route.snapshot.params['id'];
  }

  goToCategoryList() {
    this.router.navigate(['categories']);
  }

  save() {
    this.categoryservice.save(this.category).subscribe(data => {
      console.log(data);
      this.goToCategoryList();
    });
  }

  onSubmit() {
    this.save();
  }


}
