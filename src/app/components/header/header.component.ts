import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { Observable } from "node_modules/rxjs";
import { AppState } from "../../reducers";
import { getAuthenticatedDisplayName, getIsAuthenticated } from "../../selectors/auth.selectors";
import { AuthenticateDialogComponent } from "../authenticate-dialog/authenticate-dialog.component";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
    /**
     * The current authenticated user's display name (if authenticated)
     */
    displayName$: Observable<string>;

    /**
     * True if the user has authenticated, false otherwise.
     */
    isAuthenticated$: Observable<boolean>;

    constructor(
        private dialog: MatDialog,
        private store: Store<AppState>,
    ) {
        this.displayName$ = this.store.select(getAuthenticatedDisplayName);
        this.isAuthenticated$ = this.store.select(getIsAuthenticated);
    }

    handleSignIn() {
        this.dialog.open(AuthenticateDialogComponent, {
            height: "280px",
            width: "300px",
        });
    }
}
