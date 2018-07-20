import { Injectable } from "@angular/core";
import { AuthenticateRequest, RegistrationRequest, AuthenticateResponse, RegistrationResponse } from "../models/user";
import { timer, of, Observable } from "rxjs";
import { map } from "../../../node_modules/rxjs/operators";

function generateAccessKey() {
    return btoa(Math.random().toString()).substr(0, 32);
}

@Injectable({
    providedIn: "root"
})
export class AuthService {
    // This service should normally call an API that's responsible for authentication.
    // Since we're not dealing with API development in this training material, this service
    // is merely a mock/stub of what a real AuthService should normally look like.
    private users: AuthenticateRequest[] = [{
        username: "test",
        password: "test",
    }];

    authenticate(request: AuthenticateRequest): Observable<AuthenticateResponse> {
        const index = this.users.findIndex(u =>
            u.username === request.username &&
            u.password === request.password
        );

        if (index >= 0) {
            return of({
                access_key: generateAccessKey(),
                success: true,
            });
        }

        // Simulate delay, 0.5 seconds
        return timer(500).pipe(
            map(() => ({
                errors: ["Username or password was incorrect."],
                success: false,
            }))
        );
    }

    register(request: RegistrationRequest): Observable<RegistrationResponse> {
        this.users.push(request as AuthenticateRequest);

        return timer(500).pipe(
            map(() => ({ success: true }))
        );
    }
}
