import { Component } from "@angular/core";

@Component({
    template: `<h2>Welcome to Shopping App
     <br> Price Value is {{price | currency:"GBP"}}
     <br> Date is {{myDate | date:"MM/dd/yyyy"}}
     <br> Product is {{productname | uppercase | reverseText}}
    </h2>`
})
export class HomeComponent {
    price = 100.1234;
    myDate = new Date()
    productname = "sony tv"
}


@Component({
    template: `<div class="row">
    <div class="col-sm-7">
        <products-list></products-list>
    </div>
    <div class="col-sm-5 card card-body bg-light">
        <cart-items></cart-items>
    </div>
</div>`
})
export class ListComponent {}

@Component({
    template:`<h3>404. Ooooops!!! Not Found</h3>`
})
export class NotFoundComponent {}

@Component({
    selector: "sign-in",
    template:`<my-sign [title]="myTitle" 
        (myEvent)="handleMyEvent($event)"></my-sign>`
})
export class SignInComponent {
    myTitle = "Log In"
    handleMyEvent(obj){
        console.log("Received in Parent *** Username:",
            obj.usr, " Password: ", obj.pwd)
    }
}

@Component({
    selector: "sign-up",
    template:`<my-sign [title]="myHeading"></my-sign>`
})
export class SignUpComponent {
    myHeading = "Quick Sign Up"
}