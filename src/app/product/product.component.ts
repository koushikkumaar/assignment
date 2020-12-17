import { Component, OnInit } from '@angular/core';
import { CartService, CartItem, Totals } from '../services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  ngOnInit(): void {
  }
  name = 'Shopping Cart';
  cartState$ = this.shoppingCartService.state$;
  constructor(private shoppingCartService: CartService) { }

  addItemToCart(item: CartItem) {
    this.shoppingCartService.addCartItem(item);
  }

  remove(item: CartItem): void {
    this.shoppingCartService.removeCartItem(item);
  }
}
