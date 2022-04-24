import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {BrowserModule} from "@angular/platform-browser"
import {FormsModule} from "@angular/forms"
import { HeaderComponent } from "./header.component";
import { ShoppingModule } from "./shopping/shopping.module";
import { CartService } from "./services/cart.service";
import { HomeComponent, ListComponent, NotFoundComponent, SignInComponent, SignUpComponent } from "./routes.components";
import {RouterModule} from "@angular/router"
import { ProductService } from "./services/product.service";
import { ReversePipe } from "./reverse.pipe";
import {HttpClientModule} from "@angular/common/http"
import { SharedModule } from "./shared/shared.module";

let appRoutes = [
    {path:"", component: HomeComponent},
    {path:"list", component: ListComponent},
    {path:"signin", component: SignInComponent},
    {path:"signup", component: SignUpComponent},
    {path:"**", component: NotFoundComponent}
]

@NgModule({
    // Register Components & Pipes
    declarations: [AppComponent, HeaderComponent, HomeComponent,
        ListComponent, NotFoundComponent, ReversePipe,
        SignInComponent, SignUpComponent],
    // Specify Startup Component
    bootstrap: [AppComponent],
    // Specify Module Dependencies
    imports: [BrowserModule, FormsModule, ShoppingModule,
        RouterModule.forRoot(appRoutes), HttpClientModule,
    SharedModule],
    // Register Global Services
    providers: [CartService, ProductService]
})
export class AppModule {}