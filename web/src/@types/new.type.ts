/**
 * Interface representing the structure of a news article object.
 */
export interface INews {
    /**
     * Unique identifier for the news article.
     * @example 1
     */
    id: number;

    /**
     * Unique identifier for the document associated with the news article.
     * @example "doc123"
     */
    documentId: string;

    /**
     * Title of the news article.
     * @example "Breaking News: Market Crash"
     */
    titleNew: string;

    /**
     * Name of the author of the news article.
     * @example "John Doe"
     */
    authorNew: string;

    /**
     * URL to the image associated with the news article.
     * @example "https://example.com/images/news.jpg"
     */
    imageNew: string;

    /**
     * Main content or body of the news article.
     * @example "The stock market has experienced a significant downturn today, affecting..."
     */
    contentNew: string;
}
