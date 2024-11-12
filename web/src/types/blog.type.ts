// Define the IBlog interface to represent the structure of a blog object
export interface IBlog {
    // 'id' is a unique identifier for the blog (number)
    id: number;

    // 'documentId' is a string that represents the unique document identifier for the blog
    documentId: string;

    // 'blogTitle' is the title of the blog (string)
    blogTitle: string;

    // 'blogAuthor' is the name of the author of the blog (string)
    blogAuthor: string;

    // 'slogan' is a short tagline or slogan related to the blog (string)
    slogan: string;

    // 'blogInstruct' is a string that might describe instructions or content for the blog (string)
    blogInstruct: string;

    // 'createdAt' is a string representing the creation date of the blog (string)
    createdAt: string;

    // 'updatedAt' is a string representing the last updated date of the blog (string)
    updatedAt: string;

    // 'locale' is a string that may indicate the localization or language of the blog; it can be null (string | null)
    locale: string | null;

    // 'dateCreateBlog' is a string representing the exact date the blog was created (string)
    dateCreateBlog: string;

    // 'blogImage' is a string URL to the image associated with the blog (string)
    blogImage: string;

    // 'authorImage' is a string URL to the image of the blog's author (string)
    authorImage: string;

    // 'blogVideo' is a string URL to a video related to the blog (string)
    blogVideo: string;
}
