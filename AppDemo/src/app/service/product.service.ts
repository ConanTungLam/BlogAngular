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
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 3
  },
  {
    id: 2,
    name: 'Iphone A',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 7
  },
  {
    id: 3,
    name: 'Iphone B',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 9
  },
  {
    id: 4,
    name: 'Iphone C',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 10
  },
  {
    id: 5,
    name: 'Iphone D',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 5
  },
  {
    id: 6,
    name: 'Iphone E',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 12
  },
  {
    id: 7,
    name: 'Iphone F',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 1
  },
  {
    id: 8,
    name: 'Iphone G',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 20
  },
  {
    id: 9,
    name: 'Iphone H',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 4
  },
  {
    id: 10,
    name: 'Iphone I',
    description: 'This is description for phone.',
    price: (Math.round(Math.random() * 1000) / 1000)*10000000,
    amount: 11
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() { }

  getProducts() {
    return of(products);
  }

  deleteProduct(id:number){
    const index = products.findIndex(data => data.id === id);
    products.splice(index, 1);
  }

  addNewProduct(value: any){
    products.push(value);
  }

  updateProductData(product: product, type: string, param: any){
    if(type == "addToCard"){
      let index = products.findIndex(data => data.id === product.id);
      let currentProduct = products[index];
      currentProduct.amount -= param;
      products[index] = currentProduct;
    }
  }

  getSingleProduct(id: number){
    const index = products.findIndex(data => data.id === id);
    return of(products[index]);
  }

  updateProduct(productData){
    const index = products.findIndex(data => data.id === productData.id);
    products[index] = productData;

    return of({
      success: 'true'
    })
  }

}
