import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = []
  nextProductId: number = 0

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.activateRoute.params.subscribe(params => {
      this.product = this.productService.getProduct(params['id']);
      this.nextProductId = parseInt(params['id']) + 1;
    })
  }

  ngOnInit(): void {
  }

  printObject() {
    console.log(this.product);
  }

  changeImage(src: string) {
    this.product.url = src;
  }
  nextProduct() {
    if (this.productService.getLength() > this.nextProductId) {
      this.router.navigate(['/Products', this.nextProductId])
    }
  }
  previousProduct() {
    if (this.nextProductId-2 > -1) {
      this.router.navigate(['/Products', this.nextProductId - 2])
    }
  }
}
