// Define the PageableResponse interface to represent the structure of a paginated response
export interface PageableResponse<T> {
    // 'content' is an array of items of type T, representing the data content for the current page
    content: T[];

    // 'page_number' is the current page number in the paginated response (number)
    page_number: number;

    // 'page_size' is the number of items per page in the paginated response (number)
    page_size: number;

    // 'total_pages' is the total number of pages available for the paginated data (number)
    total_pages: number;
}