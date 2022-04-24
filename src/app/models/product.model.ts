export class Product {
    // 1. Declaring Data Members
    /*id:number;
    name:string;
    price: number;
    description: string;*/

    // 2. Initialize Data Members
    /*constructor(id:number, name:string, price:number, d:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = d;
    }*/


    // Declare and Initialize in Constructor
    constructor(public id:number, public name:string,
     public price:number, public description:string) {}
}