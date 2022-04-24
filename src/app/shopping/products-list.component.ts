import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { CartService } from "../services/cart.service";
import { CartItem } from "../models/cart.model";

@Component({
    selector: "products-list",
    templateUrl: "./products-list.component.html"
})
export class ProductsListComponent {
    products:Product[] = [];
    constructor(private cs:CartService, private ps:ProductService){
        //let ps:ProductService = new ProductService();
        //this.products = ps.getProducts();
        ps.getProducts().subscribe(data => this.products=data, err => console.log("Error ", err))
    }
    addToCart(selectedProduct:Product) {
        let orderedItem:CartItem = new CartItem(selectedProduct.id, selectedProduct.name, selectedProduct.price, 1)
        this.cs.addCartItem(orderedItem)
    }
}