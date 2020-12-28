import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderDetail: any = {}
  constructor(private _productS: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.orderDetail = param
    })

    let cartProudct = this._productS.cartProduct
    cartProudct.map(_ => {
      delete _['orderQuantity']
    })
    this._productS.cartProducts=[]
  }

}
