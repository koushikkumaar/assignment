import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../app/services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  totalvalue
  products: { id: string; name: string; discription: string; quantity: number; price: number; url: string; }[];
  totalcartvalue = 0;
  conditionToDisaply=false
  Shopping = false
  orders
  customer_orders=
  []

  constructor(private productservice: ProductsService, public snackBar: MatSnackBar,private router: Router) {
    this.products = productservice.products
  }
  ngOnInit() {
    this.Shopping = false
    this.productservice.totalSubject.subscribe(totalvalue=>{
       console.log(" got"  + totalvalue)
       this.totalvalue=totalvalue
     })
 
   }
   
  cartItems(){
  this.Shopping = true
  this.orders=this.productservice.orders
  for(let order of this.orders)
  {
  
      for(let productorder of this.productservice.products)
      {
          if(order.indexVal==productorder.id)
                    {
                      console.log(productorder)
                      this.customer_orders.push({"id":productorder.id, "name":productorder.name , "quantity":order.quantity , "price": productorder.price,"image":productorder.url})
                    }

            
      }
  
console.log(this.customer_orders)

    // console.log(this.customer_orders + "   orders from shopp")
  }


  }
  //add to cart method
  addToCart(indexValue, propductId) {

    //snackbar notification

   if (this.products[indexValue].quantity != 0)
    {
      alert("Added to Cart")
        // this.snackBar.open( "  Added to Cart", this.products[indexValue].name,{ duration: 2000, })
    }
    else if(this.products[indexValue].quantity == 0)
    {
      alert(" Product Unavailable")
        // this.snackBar.open( "  Product Unavailable", this.products[indexValue].name,{ duration: 2000, })
    }
  
//conditions to display +  and - buttons


    //Add to cart 


    this.totalcartvalue +=1 ;
    console.log(this.totalcartvalue + "cart value dsgsg")
    let count = 1
    let push = true
    console.log(indexValue + "   " + propductId)
    if (this.products[indexValue].quantity == 0) {
    
      return

    }
   
    for (let ords of  this.productservice.orders) {
      if (ords.indexVal == indexValue) {
        console.log("index value already")
        ords.quantity++;
        push = false
        this.conditionToDisaply=true

      }
    }
    if (push) {
       this.productservice.orders.push({ "indexVal": indexValue, "quantity": count })
      this.conditionToDisaply=true
    }
    this.products[indexValue].quantity--;

  this.productservice.sendTotal(this.totalcartvalue);
  
  //send to service


    
  }

  //remove from cart


  removeFromCart(indexValue, propductId)
  {
    this.totalcartvalue-=1;
     this.products[indexValue].quantity++;
     for( let ord of  this.productservice.orders)
     {
       if(ord.indexVal==indexValue)
       {
         ord.quantity-=1
       }
     }

     this.snackBar.open( "  Removed From Cart  ",this.products[indexValue].name, { duration: 2000, })
     this.productservice.sendTotal(this.totalcartvalue)
     
  

  }

//get quanity

getQuantity(i)
{
  for(let orders of  this.productservice.orders)
  {
      if(orders.indexVal==i)
      {
        return orders.quantity
      }
  }
}

back(){
  this.Shopping = false
}
//button to see orders
  show() {
    //  this.productservice.sendOrders(this.orders ) 
    console.log( this.productservice.orders)
  
     

  }
}
