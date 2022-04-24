import { Component } from "@angular/core";
import { CartItem } from "../models/cart.model";
import { CartService } from "../services/cart.service";

@Component({
    selector: "cart-items",
    templateUrl: "./cart-items.component.html"
})
export class CartItemsComponent {
    cartItems:CartItem[] = [];
    constructor(private csvc:CartService){
        //let csvc:CartService = new CartService();
        this.cartItems = csvc.getCartItems();
    }
    removeItem(idx:number){
        this.csvc.deleteCartItem(idx);
    }
    totalAmount(){
        let tot = 0;
        for(let e of this.cartItems){
            tot += (e.price * e.qty)
        }
        return tot;
    }
}