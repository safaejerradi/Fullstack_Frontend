import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  id: number;
  productId: number;
  category: Category = new Category();

  constructor(private categoryservice: CategoryService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoryservice.findById(this.id).subscribe(data => this.category = data,
      (error) => { 
        this.errorHandler.set(error);
        this.errorHandler.handleError(); 
      });
  }

  onSubmit() {
    this.categoryservice.update(this.id, this.category).subscribe(() =>
      this.goToCategoryList()
      ,
      (error) => { 
        this.errorHandler.set(error);
        this.errorHandler.handleError(); 
      });
  }

  goToCategoryList(){
    this.location.back();
  }

}
