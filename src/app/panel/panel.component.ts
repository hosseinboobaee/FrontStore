import { Component } from '@angular/core';
import { HeaderComponent } from '../Header/header.component';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../Model/ProductModel';
import { log } from 'console';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HeaderComponent, NgFor],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  products : ProductModel[] = [];
  constructor(private productService : ProductService){
    this.getProduct();
   }
  


  getProduct(){
     this.productService.GetAllProduct().subscribe(x => {
      this.products = x.data;
      console.log(this.products);
      
     });
  }
}
