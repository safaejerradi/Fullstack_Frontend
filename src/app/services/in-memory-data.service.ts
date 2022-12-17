import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Shop } from '../models/shop';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const shops: Shop[] = [
      {
        "id": 1,
        "name": "Panzent",
        "closed": false,
        // "schedule": {
        //   "lundi": "9-15"
        // }
      },
      {
        "id": 2,
        "name": "Andershun",
        "closed": false,
        // "schedule": {
        //   "lundi": "9-15"
        // }
      },
      {
        "id": 3,
        "name": "Stucco",
        "closed": false,
        // "schedule": {
        //   "lundi": "9-15"
        // }
      },
      {
        "id": 4,
        "name": "Visalia",
        "closed": false,
        // "schedule": {
        //   "lundi": "9-15"
        // }
      },
      {
        "id": 5,
        "name": "Enersol",
        "closed": false,
        // "schedule": {
        //   "lundi": "9-15"
        // }
      },
      {
        "id": 6,
        "name": "Maroptic",
        "closed": true,
        // "schedule": {
        //   "mardi": "9-15",
        //   "mercredi": "18-21"
        // }
      },
      {
        "id": 7,
        "name": "Netility",
        "closed": true,
        // "schedule": {
        //   "mardi": "9-15",
        //   "mercredi": "18-21"
        // }
      },
      {
        "id": 8,
        "name": "Isologics",
        "closed": true,
        // "schedule": {
        //   "mardi": "9-15",
        //   "mercredi": "18-21"
        // }
      },
      {
        "id": 9,
        "name": "Uberlux",
        "closed": true,
        // "schedule": {
        //   "mardi": "9-15",
        //   "mercredi": "18-21"
        // }
      },
      {
        "id": 10,
        "name": "Plasmos",
        "closed": true,
        // "schedule": {
        //   "mardi": "9-15",
        //   "mercredi": "18-21"
        // }
      }
      ];
      const products: Product[] = [
        {
          "id": 1,
          "name": "tacos"
        }
      ];
    return {shops, products};
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