import { Component, AfterContentInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AuthActions, AuthActionTypes } from "../../actions/auth.actions";
import { AuthenticateRequest, AuthenticateResponse } from "../../models/auth";
import { AppState } from "../../reducers";
import { PayloadAction } from "../../actions/defs";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-authenticate-dialog",
    templateUrl: "./authenticate-dialog.component.html",
    styleUrls: ["./authenticate-dialog.component.css"]
})
export class AuthenticateDialogComponent implements AfterContentInit {
    errorMessage: string;
    password = new FormControl("");
    username = new FormControl("");

    constructor(
        private actions$: Actions,
        private dialogRef: MatDialogRef<AuthenticateDialogComponent>,
        private store: Store<AppState>,
    ) { }

    ngAfterContentInit(): void {
        // Any time an Authenticate.FAILURE action is seen in the store,
        // show the error message on this dialog (if the dialog is displayed).
        this.actions$
            .pipe(
                ofType(AuthActionTypes.Authenticate.FAILURE),
                // FIXME: add take() here
            )
            .subscribe((action: PayloadAction<AuthenticateResponse>) => {
                this.errorMessage = action.payload.errors.toString();
            });

        // When authentication succeeds (e.g. Authenticate.SUCCESS happens),
        // then close the dialog.
        this.actions$
            .pipe(
                ofType(AuthActionTypes.Authenticate.SUCCESS),
            )
            .subscribe((action: PayloadAction<AuthenticateResponse>) => {
                this.dialogRef.close();
            });
    }

    handleSignIn() {
        const request: AuthenticateRequest = {
            password: this.password.value,
            username: this.username.value,
        };

        this.store.dispatch(AuthActions.auth.begin(request));
    }
}
