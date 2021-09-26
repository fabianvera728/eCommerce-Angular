import { Inject, Injectable } from '@angular/core';
import data from '../../assets/data.json';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private products: Product[] = data;
    constructor(){
        console.log("service running")
    }
    getProducts(){
        return this.products;
    }
    getProduct( idx ){
        return this.products[idx];
    }
    getLength(){
        return this.products.length;
    }
    searchProduct(input:string){
        return this.products.filter(object => object.name.toLowerCase().includes(input.toLowerCase()));
    }
}
export interface Product{
    idProduct: number,
    name:string,
    description:string,
    url:string,
    price: number
  }