import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { ProductModel } from '../../Model/ProductModel';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  constructor(private router:ActivatedRoute,private product:ProductService){
  }
  ngOnInit() {
    let id = this.router.snapshot.params['id'];
    this.product.GetProductById(id).subscribe((x:ProductModel) =>{
      console.log(x);
      
    });
  }

}
