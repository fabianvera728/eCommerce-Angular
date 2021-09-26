import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  searchProduct(input:string){
    this.router.navigate(['/search',input]);
  }
}
