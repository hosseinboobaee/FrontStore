import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../Model/ProductModel';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input() products : ProductModel;
constructor(){

}
  ngOnInit() {
    
  }




 
 
}
