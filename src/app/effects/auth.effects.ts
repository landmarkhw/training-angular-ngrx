import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthActions, AuthActionTypes } from "../actions/auth.actions";
import { PayloadAction } from "../actions/defs";
import { AuthenticateRequest, RegistrationRequest } from "../models/user";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthEffects {
    @Effect()
    auth$: Observable<Action> = this.actions$.pipe(
        // Listen for the 'Authenticate' BEGIN action
        ofType(AuthActionTypes.Authenticate.BEGIN),
        mergeMap((action: PayloadAction<AuthenticateRequest>) =>
            // Ask the service to authenticate the user
            this.authService
                .authenticate(action.payload)
                .pipe(
                    map(response => {
                        if (response.success) {
                            return AuthActions.auth.success(response);
                        }
                        else {
                            return AuthActions.auth.failure(response);
                        }
                    }),
                    catchError(error => of(AuthActions.auth.failure(error))),
                )
        )
    );

    @Effect()
    register$: Observable<Action> = this.actions$.pipe(
        // Listen for the 'Authenticate' BEGIN action
        ofType(AuthActionTypes.Register.BEGIN),
        mergeMap((action: PayloadAction<RegistrationRequest>) =>
            // Ask the service to register the user
            this.authService
                .register(action.payload)
                .pipe(
                    map(response => {
                        if (response.success) {
                            return AuthActions.register.success(response);
                        }
                        else {
                            return AuthActions.register.failure(response);
                        }
                    }),
                    catchError(error => of(AuthActions.register.failure(error))),
                )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) { }
}
