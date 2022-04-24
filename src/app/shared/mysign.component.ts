import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "my-sign",
    template:`<h3>{{title}}</h3>
     <form>
        User Name: <input type="text" #frmUser placeholder="Enter User Name"> <br>
        Password : <input type="password" #frmPwd placeholder="Enter Password"> <br>
        <button type="button" class="btn btn-primary"
            (click)="handleButtonClick(frmUser.value, frmPwd.value)">{{title}}</button>
     </form>
    `
})
export class MySignComponent {
    @Input()
    title:string;
    @Output()
    myEvent = new EventEmitter()

    handleButtonClick(usr, pwd) {
        console.log("My Sign >>> UserName ", usr, " Password ", pwd)
        this.myEvent.emit({usr, pwd});
    }
}