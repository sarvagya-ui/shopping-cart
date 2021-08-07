import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(0,'product 0','this is the product 0 description. the product is really Kool!',100),
    new Product(1,'product 1','this is the product 1 description. the product is really Kool!',200),
    new Product(2,'product 2','this is the product 2 description. the product is really Kool!',400),
    new Product(3,'product 3','this is the product 3 description. the product is really Kool!',500),
    new Product(4,'product 4','this is the product 4 description. the product is really Kool!',200),
    new Product(5,'product 5','this is the product 5 description. the product is really Kool!',600),
    new Product(6,'product 6','this is the product 6 description. the product is really Kool!',900),
  ];
  constructor( ) { }

  getProducts():Product[]{
  //TODO: Populate products from an API and return Observable
    return this.products;
  }
}
