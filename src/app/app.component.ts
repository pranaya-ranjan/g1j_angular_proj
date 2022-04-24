import { Component } from "@angular/core";

@Component({
    // Define a Tag Name for AppComponent
    selector: "app-root",
    // Specify output for Component
    templateUrl: "./app.component.html"
})
export class AppComponent {
    appHeading:string;      // Explicit Declaration
    count = 0;  // Implicit Declaration
    constructor() {
        this.appHeading = "My Angular Heading"
        //this.count = "JPMC"
    }
    setHeading():void {     // Explicit Declaration
        this.appHeading = "JPMC, Bangalore"
    }
    incrementCounter(){     // Implicit Declaration
        this.count++;
    }
}