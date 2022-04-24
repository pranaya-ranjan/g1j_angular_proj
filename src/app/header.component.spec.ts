import { TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { ReversePipe } from "./reverse.pipe";

describe("Verify Header Component", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        })
    })
    it("should create instance of Header Component", () => {
        let f = TestBed.createComponent(HeaderComponent);
    })
    it("should verify cmpHeading value", () => {
        let f = TestBed.createComponent(HeaderComponent);
        let obj = f.debugElement.componentInstance;
        expect(obj.cmpHeading).toEqual("My Shopping App")
    })
    it("verify reverse pipe", () =>{
        let p = new ReversePipe();
        expect(p.transform("ABCD")).toEqual("DCBA")
    })
})