import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Shop } from '../../../models/shop';
import { ShopService } from '../../../services/shop.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'closed', 'creationDate', 'productCount', 'categoryCount','actions'];
  shops = new MatTableDataSource<Shop>();
  private globalFilter = { name: '', closed: '', beforeCreationDate: '', afterCreationDate: '' };

  constructor(private shopService: ShopService,
    private router: Router,
     private route: ActivatedRoute,
     private errorHandler: ErrorHandlerService ) { }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit(): void {
    this.getShops();
  }

  ngAfterViewInit() {
    this.shops.paginator = this.paginator;
    this.shops.sort = this.sort;
    this.shops.filterPredicate = this.filterShops;
  }

  private getShops() {
    this.shopService.findAll().subscribe(data => {
      this.shops.data = data;
    },
    (error) => { 
      this.errorHandler.set(error);
      this.errorHandler.handleError(); 
    });
  }

  shopDetails(id:number){
    this.router.navigate(['shop-details', id]);
  }

  updateShop(id: number) {
    this.router.navigate(['shop', id]);
  }

  deleteShop(id: number) {
    this.shopService.delete(id).subscribe(() => {
      this.shops.data = this.shops.data.filter(shop => shop.id !== id);
    },
    (error) => { 
      this.errorHandler.set(error);
      this.errorHandler.handleError(); 
    })
  }

  private filterShops(shop: Shop, filter: string): boolean {
    if (filter.length === 0) return true;
  
    const filters = JSON.parse(filter);
    const nameFilter = filters.name.length > 0 ?
      shop.name.toLocaleLowerCase().trim().indexOf(filters.name.toLocaleLowerCase().trim()) !== -1
      : true;
    const closedFilter = filters.closed.length > 0 ?
      shop.closed.toString().toLocaleLowerCase().trim().indexOf(filters.closed.toLocaleLowerCase().trim()) !== -1
      : true;
      const beforeCreationDateFilter = 
      filters.beforeCreationDate.length > 0 && shop.creationDate != null ?
      shop.creationDate <= filters.beforeCreationDate
      : true;
      const afterCreationDateFilter = 
      filters.afterCreationDate.length > 0 && shop.creationDate != null ?
      shop.creationDate >= filters.afterCreationDate
      : true;
    return nameFilter && closedFilter && beforeCreationDateFilter && afterCreationDateFilter;
  }

  changeFilter(value: string, field: string) {
    switch (field) {
      case 'name': this.globalFilter.name = value; break;
      case 'closed': this.globalFilter.closed = value; break;
      case 'beforeCreationDate': this.globalFilter.beforeCreationDate = value; break;
      case 'afterCreationDate': this.globalFilter.afterCreationDate = value; break;
    }
    const filters = JSON.stringify(this.globalFilter);
    this.shops.filter = filters;
  }

}
