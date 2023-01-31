import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = new Category();
  productId: number;

  constructor(
    private categoryservice: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private location: Location) { }


  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
  }

  goToCategoryList() {
    this.location.back();
  }

  save() {
    this.categoryservice.save(this.category, this.productId).subscribe({next: () => {
      this.goToCategoryList();
    },
    error: (error) => { 
      this.errorHandler.set(error);
      this.errorHandler.handleError(); 
    }});
  }

  onSubmit() {
    this.save();
  }


}
