// Defining the IJwtPayload interface to represent the structure of the JWT payload
export interface IJwtPayload {
    user_id: string; // The unique identifier of the user, typically used to identify the user in the system
    sub: string; // The subject of the token, often used to identify the entity (user) the token is about
    email: string; // The email address of the user encoded in the JWT
    exp: number; // The expiration time of the token, typically represented as a UNIX timestamp (seconds since epoch)
}