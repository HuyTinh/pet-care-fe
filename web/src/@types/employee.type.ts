/**
 * Interface representing the structure of an Employee object.
 */
export interface IEmployee {
    /**
     * Unique identifier for the employee.
     * @example 101
     */
    id: number;

    /**
     * Employee's email address.
     * @example "john.doe@example.com"
     */
    email: string;

    /**
     * Employee's gender.
     * @example "Male"
     */
    gender: string;

    /**
     * Employee's role in the organization (e.g., "Manager", "Staff").
     * @example "Manager"
     */
    role: string;

    /**
     * Employee's first name.
     * @example "John"
     */
    first_name: string;

    /**
     * Employee's last name.
     * @example "Doe"
     */
    last_name: string;

    /**
     * URL to the employee's profile image.
     * @example "https://example.com/images/employee.jpg"
     */
    image_url: string;

    /**
     * Account identifier associated with the employee.
     * @example 1001
     */
    account_id: number;

    /**
     * Employee's contact phone number.
     * @example "+034567890"
     */
    phone_number: string;
}
