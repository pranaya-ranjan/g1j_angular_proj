import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product.model";

@Component({
    templateUrl: "./manage.component.html"
})
export class ManageComponent {
    mgProducts:Product[] = []
    frmProduct:Product = new Product(null, null, null, null);
    constructor(private psvc:ProductService){
        //this.mgProducts = psvc.getProducts();
        psvc.getProducts().subscribe(
            (data) =>  this.mgProducts = data,
            (err) => console.log("GET Error ", err)
        )
    }

    add(){
        this.psvc.addProduct(this.frmProduct).subscribe(
            (data) => {
                console.log("Add Success")
                this.mgProducts.push(data)
            }, (err) => {
                console.log("Add Error ", err)
            }
        )
        this.frmProduct = new Product(null, null, null, null);
    }
    remove(id:number){
        this.psvc.deleteProduct(id).subscribe(
            () => {
                console.log("Delete Success")
                let idx = this.mgProducts.findIndex((e) => e.id == id);
                this.mgProducts.splice(idx, 1)
            }, (err) => {
                console.log("Delete Error ", err)
            }
        )
    }
    edit(selectedProduct:Product){
        //this.frmProduct = selectedProduct;
        Object.assign(this.frmProduct, selectedProduct);
    }
    update() {
        this.psvc.updateProduct(this.frmProduct).subscribe(
            (data) => {
                console.log("Update Success")
                let x = this.mgProducts.findIndex((e) => e.id == data.id)
                this.mgProducts[x] = data;
            }, (err) =>  {
                console.log("Update Error ", err)
            }
        )
    }
}