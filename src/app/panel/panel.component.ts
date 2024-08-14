import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../Header/header.component';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../Model/ProductModel';
import { NgFor } from '@angular/common';
import { ProductComponent } from "./product/product.component";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { log } from 'console';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HeaderComponent, NgFor, ProductComponent, SliderComponent],
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
