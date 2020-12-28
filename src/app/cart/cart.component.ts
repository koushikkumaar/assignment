import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts:any=[]
  price:any={}

  constructor(private _productS:ProductsService,
    private router:Router) { }

  ngOnInit(): void {
    this.cartProducts = this._productS.cartProducts
    this.calculatePrice()
  }

  calculatePrice(){
    this.price={
      totalPrice:0,
      payAmount:0,
      totalSaving:0,
      shipCharge:40
    }
    this.cartProducts.map(_=>{
      this.price.totalPrice += _.mrp * _.orderQuantity,
      this.price.payAmount += _.price * _.orderQuantity,
      this.price.totalSaving = this.price.totalPrice - this.price.payAmount,
      this.price.payableAmount = this.price.payAmount+ this.price.shipCharge
    })
  }

  removeCartProduct(product){
    product.orderQuantity = 0
    this._productS.descreaseQty(product)
    this.calculatePrice()
  }

  placeOrder(){
    this._productS.openSnackBar('Your Order Placed Successfully',"")
    this.router.navigate(['/order'],{queryParams:{amount:this.price.payableAmount,items:this.cartProducts.length}})
  }
}
