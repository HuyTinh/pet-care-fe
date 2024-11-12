// Define the structure for an Employee object
export interface IEmployee {
    id: number; // Unique identifier for the employee
    email: string; // Employee's email address
    gender: string; // Employee's gender
    role: string; // Employee's role in the organization (e.g., "Manager", "Staff")
    first_name: string; // Employee's first name
    last_name: string; // Employee's last name
    image_url: string; // URL to the employee's profile image
    account_id: number; // Account identifier associated with the employee
    phone_number: string; // Employee's contact phone number
}
