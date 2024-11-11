// Defining the APIReponse interface which is a generic structure for API responses
export interface APIReponse<T> {
    code: number; // Status code representing the response (e.g., 1000 for success, 400 for error)
    data?: T[]; // The data returned by the API, which is an optional array of type `T`
    message?: string; // An optional message from the API (could be an error message or info message)
}
