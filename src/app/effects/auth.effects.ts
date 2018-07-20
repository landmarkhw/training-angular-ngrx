import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthActions, AuthActionTypes } from "../actions/auth.actions";
import { PayloadAction } from "../actions/defs";
import { AuthenticateRequest } from "../models/user";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthEffects {
    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        // Listen for the 'Authenticate' BEGIN action
        ofType(AuthActionTypes.Authenticate.BEGIN),
        mergeMap((action: PayloadAction<AuthenticateRequest>) =>
            // Ask the service to authenticate the user
            this.authService
                .authenticate(action.payload)
                .pipe(
                    map(authResponse => {
                        if (authResponse.success) {
                            return AuthActions.auth.success(authResponse);
                        }
                        else {
                            return AuthActions.auth.failure(authResponse);
                        }
                    }),
                    catchError(error => of(AuthActions.auth.failure(error))),
                )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) { }
}
