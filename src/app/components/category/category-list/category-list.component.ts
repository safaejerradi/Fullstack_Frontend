import { AfterViewInit, Component ,Input,OnChanges,OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Route,Router,ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnChanges, AfterViewInit {
  @Input() product: Product;
  @ViewChild(MatPaginator) paginator: MatPaginator
  
  displayedColumns: string[] = ['name', 'actions'];
  displayedFooterColumns: string[] = ['name'];
  categories = new MatTableDataSource<Category>();

  constructor(private categoryservice: CategoryService,
    private router: Router,
    private errorHandler: ErrorHandlerService
    ) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['product'] && !changes['product'].firstChange) this.categories.data = this.product.categories;
  }

  ngAfterViewInit() {
    this.categories.paginator = this.paginator;
  }
  
  updateCategory(id: number){
    this.router.navigate(['category', id]);
  }

  categoryDetails(id:number){
    this.router.navigate(['category', id]);
  }

  deleteCategory(id: number){
    this.categoryservice.delete(id).subscribe( () => {
      this.categories.data = this.categories.data.filter( c => c.id !== id);
    },
    (error) => { 
      this.errorHandler.set(error);
      this.errorHandler.handleError(); 
    })
  }
   
  addCategoryToProduct(id: number) {
    this.router.navigate([`product/${id}/category/create`]);
  }
}
