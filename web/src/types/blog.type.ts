export interface IBlog {
    id: number;
    documentId: string;
    blogTitle: string;
    blogAuthor: string;
    slogan: string;
    blogInstruct: string;
    createdAt: string;
    updatedAt: string;
    locale: string | null;
    dateCreateBlog: string;
    blogImage: string;
    authorImage: string;
    blogVideo: string;
}