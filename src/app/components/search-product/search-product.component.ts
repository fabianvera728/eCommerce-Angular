import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/services/app.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  products: Product[] = [];
  input: string = ''

  constructor(private activateRoute: ActivatedRoute, 
    private productService: ProductService, 
    private router: Router) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.products = this.productService.searchProduct(params['input']);
      this.input = params['input'];
      console.log(this.products);
    })
  }

  viewProduct( idx:number ){
    this.router.navigate(['/Products', idx])
  }

}