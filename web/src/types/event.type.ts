// Define the IEvent interface to represent the structure of an event object
export interface IEvent {
    // 'id' is a unique identifier for the event (number)
    id: number;

    // 'titleEvent' is the title of the event (string)
    titleEvent: string;

    // 'contentEvent' is the detailed description or content of the event (string)
    contentEvent: string;

    // 'imageEvent' is a string URL to the image associated with the event (string)
    imageEvent: string;

    // 'dateEvent' is the date when the event takes place (string)
    dateEvent: string;
}
