export interface PageableResponse<T> {
    content: T[]
    page_number: number
    page_size: number
    total_pages: number
}
