// Define the INews interface to represent the structure of a news article object
export interface INews {
    // 'id' is a unique identifier for the news article (number)
    id: number;

    // 'documentId' is a unique identifier for the document associated with the news article (string)
    documentId: string;

    // 'titleNew' is the title of the news article (string)
    titleNew: string;

    // 'authorNew' is the name of the author of the news article (string)
    authorNew: string;

    // 'imageNew' is a string URL to the image associated with the news article (string)
    imageNew: string;

    // 'contentNew' is the main content or body of the news article (string)
    contentNew: string;
}
