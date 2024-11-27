/**
 * Interface representing the structure of an event object.
 */
export interface IEvent {
    /**
     * Unique identifier for the event.
     * @example 1
     */
    id: number;

    /**
     * Title of the event.
     * @example "Annual Company Meeting"
     */
    titleEvent: string;

    /**
     * Detailed description or content of the event.
     * @example "This event will cover the company's progress over the year..."
     */
    contentEvent: string;

    /**
     * URL to the image associated with the event.
     * @example "https://example.com/images/event.jpg"
     */
    imageEvent: string;

    /**
     * Date when the event takes place.
     * @example "2024-12-25"
     */
    dateEvent: string;
}
