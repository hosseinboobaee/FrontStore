import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../Header/header.component';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../Model/ProductModel';
import { NgFor } from '@angular/common';
import { ProductComponent } from "./product/product.component";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HeaderComponent, NgFor, ProductComponent, SliderComponent,MatButtonModule, MatDividerModule, MatIconModule ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent implements OnInit{
 products: ProductModel[] = []
  constructor(private productService : ProductService, private activatedRout:ActivatedRoute){
this.getProduct();
   }
  ngOnInit() {
    // this.activatedRout.paramMap.subscribe((x:ParamMap) =>{
    //  let id = parseInt(x.get('id'));
    //  console.log(id);
     
      
    // })
  }
  

   getProduct(){
    this.productService.GetAllProduct().subscribe(x => {
     this.products = x.data;
     
    });
  }
}
