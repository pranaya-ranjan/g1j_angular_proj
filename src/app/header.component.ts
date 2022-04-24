import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    template: `<nav class="navbar navbar-expand-sm bg-dark">
        <a href="#" class="navbar-brand">{{cmpHeading}}</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" routerLink="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="/list">Shopping List</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="/manage">Manage Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="/signin">Sign In</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="/signup">Quick Sign Up</a>
            </li>
        </ul>
    </nav>`
})
export class HeaderComponent {
    cmpHeading = "My Shopping App"
}