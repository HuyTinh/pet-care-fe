export interface APIReponse<T> {
    code: number,
    data?: T[],
    message?: string
}