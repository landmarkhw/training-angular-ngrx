import { PayloadAction } from "../actions/defs";
import { AuthenticateResponse } from "../models/auth";
import { AuthActionTypes } from "../actions/auth.actions";

/**
 * Define the `auth` area of state.
 */
export interface AuthState {
    access_key: string;
};

/**
 * The default state.
 */
const defaultState: AuthState = {
    access_key: null,
};

/**
 * The reducer, responsible for updating the state of this area of the application
 * when specific actions are observed in the store.
 */
export function authReducer(state = defaultState, action: PayloadAction<AuthenticateResponse>) {
    switch (action.type) {
        // When the search results are successfully retrieved from the API,
        // store those results in the Redux store.
        case AuthActionTypes.Authenticate.SUCCESS: {
            // Create an immutable copy of state.  This is one of the main rules
            // of a reducer -- it MUST return immutable state.
            // This makes the reducer a `pure` function -- we don't modify
            // state directly, but clone it first, and then modify the clone.
            return Object.assign({}, state, {
                access_key: action.payload.access_key,
            } as AuthState);
        }

        // No changes to state need to be made, return the current state.
        default: return state;
    }
}
