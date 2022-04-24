import { Product } from "../models/product.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ProductService {
    private productsData:Product[] = [];
    restUrl = "http://localhost:3000/wsproducts"
    constructor(private http:HttpClient) {    }
    getProducts(){
        //return this.productsData;
        return this.http.get<Product[]>(this.restUrl)
    }
    addProduct(newproduct:Product){
        return this.http.post<Product>(this.restUrl, newproduct)
    }
    deleteProduct(id:number){
        return this.http.delete(this.restUrl+"/"+id)
    }
    updateProduct(modifiedProduct:Product){
        return this.http.put<Product>(this.restUrl+"/"+modifiedProduct.id, modifiedProduct)
    }
}