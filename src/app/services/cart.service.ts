import { CartItem } from "../models/cart.model";
import { Injectable } from "@angular/core";
@Injectable()
export class CartService {
    private cartData:CartItem[] = []
    constructor(){}
    getCartItems(){
        return this.cartData;
    }
    addCartItem(newitem:CartItem){
        this.cartData.push(newitem)
    }
    deleteCartItem(idx:number){
        this.cartData.splice(idx, 1);
    }
}