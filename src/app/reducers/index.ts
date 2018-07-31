import { movieReducer, MovieState } from "./movie.reducer";
import { AuthState, authReducer } from "./auth.reducer";

/**
 * The shape of the state for the application.
 */
export interface AppState {
    /**
     * Authentication-related state.
     */
    auth: AuthState;

    /**
     * Movie-related state.
     */
    movie: MovieState;
}

/**
 * A list of reducers in the application.
 * Note that this follows the "shape" of the applicaiton state
 * defined in `AppState`.
 */
export const reducers = {
    auth: authReducer,
    movie: movieReducer,
};
