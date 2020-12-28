import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
@Injectable()
export class ProductsService {
  public totalSubject = new Subject()
  public orderSubject = new Subject()
  cartProducts: any = []
  orders:any=[]
  constructor(private _snackBar: MatSnackBar) { }

  products = [{
    "id": "0",
    "name": "Men's Running Shoe",
    "discription": "Hiking & Trekking Shoo",
    "quantity": 2,
    "price": 367,
    "url": "../assets/product.jpeg",
    "mrp": 400,
    "offer":8
  },
  {
    "id": "1",
    "name": "Light-Weight Running Shoes ",
    "discription": "Hiking & Trekking Shoo",
    "quantity": 2,
    "price": 300,
    "url": "../assets/product2.jpeg",
    "mrp": 450,
    "offer":33
  }
    ,
  {
    "id": "2",
    "name": "Men's Mesh Sports",
    "discription": "Hiking & Trekking Shoo",
    "quantity": 2,
    "price": 500,
    "url": "../assets/product3.jpeg",
    "mrp": 600,
    "offer":16

  }, {
    "id": "3",
    "name": "Men's Fashion Sneakers",
    "discription": "Hiking & Trekking Shoo",
    "quantity": 2,
    "price": 200,
    "url": "../assets/product4.jpeg",
    "mrp": 400,
    "offer":50
  }
  ]

  get productList() {
    return this.products;
  }

  sendTotal(totalVal) {
    this.totalSubject.next(totalVal)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  addProduct(product) {
    product.orderQuantity = 1
    this.cartProducts.push(product)
  }

  get cartProduct(){
    return this.cartProducts
  }

  descreaseQty(product){
    if(product.orderQuantity>1){
      product.orderQuantity -= 1
    }
    else{
      delete product['orderQuantity']
      let productIndex= this.cartProduct.indexOf(product)
      this.cartProduct.splice(productIndex,1)
    }
  }

  increaseQty(product){
    product.orderQuantity += 1
  }
}