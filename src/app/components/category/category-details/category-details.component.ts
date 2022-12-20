import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{

  category : Category;
  id : number;
  constructor(private route: ActivatedRoute,private categoryservice:CategoryService){}
  
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.category = new Category();
    this.categoryservice.findById(this.id).subscribe(data =>{
      this.category = data;
    } );

}}
