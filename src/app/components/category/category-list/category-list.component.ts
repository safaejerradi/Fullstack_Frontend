import { Component ,OnInit} from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Route,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private categoryservice: CategoryService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();
  }
  private getCategory() {
    this.categoryservice.findAll().subscribe(data => {
      this.categories = data;
    });

  }
  updateCategory(id: number){
    this.router.navigate(['category', id]);
  }

  categoryDetails(id:number){
    this.router.navigate(['category-details', id]);
  }

  deleteCategory(id: number){
    this.categoryservice.delete(id).subscribe( data => {
      console.log(data);
      this.getCategory();
    })
  }
   

}
