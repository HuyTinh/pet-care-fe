// Defining the Account interface which represents the structure of an account object
export interface IAccount {
  id: number; // Unique identifier for the account
  email: string; // Email address associated with the account
  gender: string; // Gender of the account holder
  first_name: string; // First name of the account holder
  last_name: string; // Last name of the account holder
  image_url: string; // URL of the account holder's profile image
  account_id: number; // Unique identifier for the associated account, might be used to link to other data
  phone_number: string; // Phone number of the account holder
}
