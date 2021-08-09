import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem=[
    // {id:0,productId:0,productName:'test1',qty:9,price:900},
    // {id:1,productId:1,productName:'test2',qty:4,price:100},
    // {id:2,productId:2,productName:'test3',qty:6,price:800},
    // {id:3,productId:3,productName:'test4',qty:5,price:600},
  ];

  cartTotal:number=0;
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
     this.msg.getMsg().subscribe(item=>(console.log(item))
     )

    this.cartItem.forEach(item=>{
      this.cartTotal+=(item.qty*item.price)});

    }
  }



