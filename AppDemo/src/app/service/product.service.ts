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
    name: 'Samsung S8',
    description: 'This is description for phone.',
    price: 1000000,
    amount: 3
  },
  {
    id: 2,
    name: 'Samsung S9',
    description: 'This is description for phone.',
    price: 2000000,
    amount: 7
  },
  {
    id: 3,
    name: 'Iphone 8+',
    description: 'This is description for phone.',
    price: 3000000,
    amount: 9
  },
  {
    id: 4,
    name: 'Iphone X',
    description: 'This is description for phone.',
    price: 4000000,
    amount: 10
  },
  {
    id: 5,
    name: 'Iphone 11',
    description: 'This is description for phone.',
    price: 5000000,
    amount: 5
  },
  {
    id: 6,
    name: 'Samsung Note 8',
    description: 'This is description for phone.',
    price: 6000000,
    amount: 12
  },
  {
    id: 7,
    name: 'Nokia 6',
    description: 'This is description for phone.',
    price: 7000000,
    amount: 1
  },
  {
    id: 8,
    name: 'Nokia 8',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 20
  },
  {
    id: 9,
    name: 'Iphone 6s',
    description: 'This is description for phone.',
    price: 9000000,
    amount: 4
  },
  {
    id: 10,
    name: 'Samsung S10+',
    description: 'This is description for phone.',
    price: 1200000,
    amount: 11
  },{
    id: 11,
    name: 'Samsung A8',
    description: 'This is description for phone.',
    price: 1000000,
    amount: 3
  },
  {
    id: 12,
    name: 'Iphone 7+',
    description: 'This is description for phone.',
    price: 2000000,
    amount: 7
  },
  {
    id: 13,
    name: 'Xiaomi Mi 8',
    description: 'This is description for phone.',
    price: 3000000,
    amount: 9
  },
  {
    id: 14,
    name: 'Sony XA',
    description: 'This is description for phone.',
    price: 4000000,
    amount: 10
  },
  {
    id: 15,
    name: 'Sony U6',
    description: 'This is description for phone.',
    price: 5000000,
    amount: 5
  },
  {
    id: 16,
    name: 'Lg G7',
    description: 'This is description for phone.',
    price: 6000000,
    amount: 12
  },
  {
    id: 17,
    name: 'Lg L30',
    description: 'This is description for phone.',
    price: 7000000,
    amount: 1
  },
  {
    id: 18,
    name: 'Iphone X+',
    description: 'This is description for phone.',
    price: 8000000,
    amount: 20
  },
  {
    id: 19,
    name: 'Samsung Note 10',
    description: 'This is description for phone.',
    price: 9000000,
    amount: 4
  },
  {
    id: 20,
    name: 'Ipad Air 2',
    description: 'This is description for phone.',
    price: 1200000,
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
