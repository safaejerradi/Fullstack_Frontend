import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Shop } from '../models/shop';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // const shops: Shop[] = [
    //   {
    //     "id": 1,
    //     "name": "Panzent",
    //     "closed": false,
    //     "creationDate": new Date("2019-01-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "lundi": "9-15"
    //     // }
    //   },
    //   {
    //     "id": 2,
    //     "name": "Andershun",
    //     "closed": false,
    //     "creationDate": new Date("2019-02-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "lundi": "9-15"
    //     // }
    //   },
    //   {
    //     "id": 3,
    //     "name": "Stucco",
    //     "closed": false,
    //     "creationDate": new Date("2020-01-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "lundi": "9-15"
    //     // }
    //   },
    //   {
    //     "id": 4,
    //     "name": "Visalia",
    //     "closed": false,
    //     "creationDate": new Date("2020-12-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "lundi": "9-15"
    //     // }
    //   },
    //   {
    //     "id": 5,
    //     "name": "Enersol",
    //     "closed": false,
    //     "creationDate": new Date("2021-01-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "lundi": "9-15"
    //     // }
    //   },
    //   {
    //     "id": 6,
    //     "name": "Maroptic",
    //     "closed": true,
    //     "creationDate": new Date("2021-09-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "mardi": "9-15",
    //     //   "mercredi": "18-21"
    //     // }
    //   },
    //   {
    //     "id": 7,
    //     "name": "Netility",
    //     "closed": true,
    //     "creationDate": new Date("2022-01-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "mardi": "9-15",
    //     //   "mercredi": "18-21"
    //     // }
    //   },
    //   {
    //     "id": 8,
    //     "name": "Isologics",
    //     "closed": true,
    //     "creationDate": new Date("2022-06-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "mardi": "9-15",
    //     //   "mercredi": "18-21"
    //     // }
    //   },
    //   {
    //     "id": 9,
    //     "name": "Uberlux",
    //     "closed": true,
    //     "creationDate": new Date("2018-01-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "mardi": "9-15",
    //     //   "mercredi": "18-21"
    //     // }
    //   },
    //   {
    //     "id": 10,
    //     "name": "Plasmos",
    //     "closed": true,
    //     "creationDate": new Date("2018-07-01"),
    //     "productCount": 0,
    //     // "schedule": {
    //     //   "mardi": "9-15",
    //     //   "mercredi": "18-21"
    //     // }
    //   }
      // ];
      const products: Product[] = [
        {
          "id": 1,
          "name": "tacos",
          "shop_id":1
        }
      ];
      const categories: Category[] = [
        {
          "id": 1,
          "name": "pattes",
          "product_id":1
        }
      ];
      
    return { products,categories};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(shops: Shop[]): number {
    return shops.length > 0 ? Math.max(...shops.map(shop => shop.id)) + 1 : 11;
  }
  
}