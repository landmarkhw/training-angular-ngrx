import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthenticateDialogComponent } from "./authenticate-dialog.component";

describe("AuthenticateDialogComponent", () => {
    let component: AuthenticateDialogComponent;
    let fixture: ComponentFixture<AuthenticateDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthenticateDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthenticateDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
