/**
 * Interface representing the structure of a blog object.
 */
export interface IBlog {
    /**
     * Unique identifier for the blog.
     * @example 1
     */
    id: number;

    /**
     * Unique document identifier for the blog.
     * @example "doc123"
     */
    documentId: string;

    /**
     * Title of the blog.
     * @example "Introduction to TypeScript"
     */
    blogTitle: string;

    /**
     * Name of the blog's author.
     * @example "John Doe"
     */
    blogAuthor: string;

    /**
     * Short tagline or slogan related to the blog.
     * @example "Learn the basics of TypeScript"
     */
    slogan: string;

    /**
     * Content or instructions related to the blog.
     * @example "This blog post explains TypeScript fundamentals..."
     */
    blogInstruct: string;

    /**
     * Date the blog was created.
     * @example "2024-11-15"
     */
    createdAt: string;

    /**
     * Date the blog was last updated.
     * @example "2024-11-16"
     */
    updatedAt: string;

    /**
     * Localization or language of the blog. Can be null if not specified.
     * @example "en-US"
     */
    locale: string | null;

    /**
     * Exact date the blog was created.
     * @example "2024-11-15"
     */
    dateCreateBlog: string;

    /**
     * URL to the image associated with the blog.
     * @example "https://example.com/images/blog-image.jpg"
     */
    blogImage: string;

    /**
     * URL to the image of the blog's author.
     * @example "https://example.com/images/author-image.jpg"
     */
    authorImage: string;

    /**
     * URL to a video related to the blog.
     * @example "https://example.com/videos/blog-video.mp4"
     */
    blogVideo: string;
}
