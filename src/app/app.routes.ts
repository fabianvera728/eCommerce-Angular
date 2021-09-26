import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'Products/:id', component: ProductComponent},
    { path: 'About', component: AboutComponent },
    { path: 'search/:input', component: SearchProductComponent },
    { path: '**', component: HomeComponent }
]

export const APP_ROUTING = RouterModule.forRoot(ROUTES);