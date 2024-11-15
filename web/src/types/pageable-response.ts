/**
 * Interface representing the structure of a paginated response.
 * @template T - The type of the items in the paginated response (e.g., `IMedicine[]`).
 */
export interface PageableResponse<T> {
    /**
     * Array of items of type T representing the data content for the current page.
     * @example [{ id: 1, name: "Medicine A" }, { id: 2, name: "Medicine B" }]
     */
    content: T[];

    /**
     * Current page number in the paginated response.
     * @example 1
     */
    page_number: number;

    /**
     * Number of items per page in the paginated response.
     * @example 20
     */
    page_size: number;

    /**
     * Total number of pages available for the paginated data.
     * @example 5
     */
    total_pages: number;
}
