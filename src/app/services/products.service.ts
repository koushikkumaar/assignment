import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class ProductsService {
  public totalSubject = new Subject()
public orderSubject = new Subject()
 constructor() { }
 orders=[]
   products=[
        { "id":"0",
          "name":"Earton",
          "discription":"Hiking & Trekking Shoo",
          "quantity":2,
          "price":367 ,
          "url":"../assets/product.jpeg"
        },
       {
        "id":"1",
        "name":"Earton",
        "discription":"Hiking & Trekking Shoo",
        "quantity":2,
        "price":367,
        "url":"../assets/product2.jpeg"
          
        }
        ,
       {
        "id":"2",
        "name":"Earton",
        "discription":"Hiking & Trekking Shoo",
        "quantity":2,
        "price":367,
        "url":"../assets/product3.jpeg"
        

      },   {
        "id":"3",
        "name":"Earton",
        "discription":"Hiking & Trekking Shoo",
        "quantity":2,
        "price":367,
        "url":"../assets/product4.jpeg"
      }
  ]
  sendTotal(totalVal)

  { 
    
    
    this.totalSubject.next(totalVal)
  }
}