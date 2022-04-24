import { NgModule } from "@angular/core";
import { ProductsListComponent } from "./products-list.component";
import { CartItemsComponent } from "./cart-items.component";
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms"
import { ManageComponent } from "./manage.component";
import { RouterModule } from "@angular/router";
import { ReversePipe } from "../reverse.pipe";

@NgModule({
    declarations: [ProductsListComponent, CartItemsComponent, ManageComponent],
    exports: [ProductsListComponent, CartItemsComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild([
        {path: "manage", component: ManageComponent}
    ])]
})
export class ShoppingModule {}