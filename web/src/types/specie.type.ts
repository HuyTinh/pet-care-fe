// Define the ISpecie interface to represent the structure of a species object
export interface ISpecie {
    // 'name' is the name of the species (string)
    name: string;

    // 'status' is a boolean indicating if the species is currently active or not
    status: boolean;

    // 'createdAt' is the timestamp representing when the species was created (number)
    createdAt: number;

    // 'updatedAt' is the timestamp representing the last time the species information was updated (number)
    updatedAt: number;
}
