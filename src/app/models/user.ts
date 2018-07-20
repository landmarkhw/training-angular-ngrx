export interface Response {
    errors?: string[];
    success: boolean;
}

export interface AuthenticateRequest {
    username: string;
    password: string;
};

export interface AuthenticateResponse extends Response {
    access_key?: string;
};

export interface RegistrationRequest {
    username: string;
    password: string;
}

export interface RegistrationResponse extends Response { }
