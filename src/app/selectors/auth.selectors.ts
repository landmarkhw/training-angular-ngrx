import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers";

const getAuthState = (state: AppState) => state.auth;

/**
 * Returns true if the user is authenticated.
 */
export const getIsAuthenticated = createSelector(
    getAuthState,
    auth => {
        if (auth && auth.response) {
            return auth.response.success;
        }
        return false;
    }
)

/**
 * Get the display name of the authenticated user.
 */
export const getAuthenticatedDisplayName = createSelector(
    getAuthState,
    auth => {
        if (auth && auth.response) {
            return auth.response.displayName;
        }
        return "";
    }
);
