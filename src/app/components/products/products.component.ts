import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  productSearch: Product[] = []

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  viewProduct( idx:number ){
    this.router.navigate(['/Products', idx])
  }

  searchProducts( input:string ){
    this.productSearch = this.products.filter(object => object.name.toLowerCase().includes(input.toLowerCase()));
    console.log(this.productSearch)
  }
}