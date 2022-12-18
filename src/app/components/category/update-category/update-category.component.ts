import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Route,ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id: number;
  category: Category = new Category();

  constructor(private categoryservice: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryservice.findById(this.id).subscribe(data => this.category = data);
  }

  onSubmit() {
    this.categoryservice.update(this.id, this.category).subscribe(() =>
      this.goToCategoryList());
  }

  goToCategoryList(){
    this.router.navigate(['categories']);
  }

}
