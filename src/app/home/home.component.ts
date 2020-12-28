import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalvalue
  orders
  customer_orders=[]
  products:any=[]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ]
  }



  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.products=this.productservice.productList
  }

  addProduct(product){
    this.productservice.addProduct(product)
    this.productservice.openSnackBar('Product added into cart',"")
  }

  descreaseQty(product){
    this.productservice.descreaseQty(product)
    this.productservice.openSnackBar('Product Quantity descreased',"")
  }

  increaseQty(product){
    this.productservice.increaseQty(product)
    this.productservice.openSnackBar('Product Quantity increased',"")
  }
}
