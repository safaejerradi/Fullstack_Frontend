import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router,ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService) { }


  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
  }

  goToCategoryList() {
    this.router.navigate(['product', this.route.snapshot.params['id'], 'detail']);
  }

  save() {
    this.categoryservice.save(this.category, this.productId).subscribe(() => {
      this.goToCategoryList();
    },
    (error) => { 
      this.errorHandler.set(error);
      this.errorHandler.handleError(); 
    });
  }

  onSubmit() {
    this.save();
  }


}
