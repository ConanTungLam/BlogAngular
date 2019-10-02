import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface product {
  id: number,
  name: string,
  description: string,
  price: number,
  amount: number
}

const products: product[] = [
  {
    id: 1,
    name: 'Iphone Z',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 2,
    name: 'Iphone A',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 3,
    name: 'Iphone B',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 4,
    name: 'Iphone C',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 5,
    name: 'Iphone D',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 6,
    name: 'Iphone E',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 7,
    name: 'Iphone F',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 8,
    name: 'Iphone G',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 9,
    name: 'Iphone H',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  },
  {
    id: 10,
    name: 'Iphone I',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 3
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  currentRemove: number;


  constructor() { }

  getProducts() {
    return of(products);
  }

  deleteProduct(id:number){
    const index = products.findIndex(data => data.id === id);
    console.log(index);
    products.splice(index, 1);
  }

}
