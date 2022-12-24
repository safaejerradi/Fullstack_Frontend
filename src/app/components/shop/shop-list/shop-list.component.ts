import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Shop } from '../../../models/shop';
import { ShopService } from '../../../services/shop.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'closed', 'creationDate', 'productCount', 'categoryCount','actions'];
  shops = new MatTableDataSource<Shop>();
  private globalFilter = { name: '', closed: '' };

  constructor(private shopService: ShopService,
    private router: Router,
     private route: ActivatedRoute) { }

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
    });
  }

  shopDetails(id:number){
    this.router.navigate(['shop-details', id]);
  }

  updateShop(id: number) {
    this.router.navigate(['shop', id]);
  }

  deleteShop(id: number) {
    this.shopService.delete(id).subscribe(data => {
      console.log(data);
      this.getShops();
    })
  }

  addProductToShop(id: number) {
    this.router.navigate([`${id}/product/create`], { relativeTo: this.route });
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
    return nameFilter && closedFilter;
  }

  changeFilter(value: string, field: string) {
    field === 'closed' ? this.globalFilter.closed = value : this.globalFilter.name = value;
    const filters = JSON.stringify(this.globalFilter);
    this.shops.filter = filters;
  }

}
