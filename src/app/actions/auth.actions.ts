import { AuthenticateRequest, AuthenticateResponse, RegistrationRequest, RegistrationResponse } from "../models/auth";
import { AsyncAction, createAsyncActions } from "./defs";

/**
 * A list of string constants for each type of action that can be dispatched.
 */
export const AuthActionTypes = {
    Authenticate: AsyncAction("user/auth"),
    Register: AsyncAction("user/register"),
};

/**
 * A collection of action creators for 'auth' actions.
 */
export const AuthActions = {
    /**
     * Authenticates the user.
     */
    auth: createAsyncActions<AuthenticateRequest, AuthenticateResponse>(AuthActionTypes.Authenticate),

    /**
     * Registers a new user with the system.
     */
    register: createAsyncActions<RegistrationRequest, RegistrationResponse>(AuthActionTypes.Register),
};
