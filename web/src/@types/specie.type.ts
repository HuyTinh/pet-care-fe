/**
 * Interface representing the structure of a species object.
 */
export interface ISpecie {
    /**
     * The name of the species.
     * @example "Canis lupus familiaris" (Domestic Dog)
     */
    name: string;

    /**
     * A boolean indicating if the species is currently active or not.
     * @example true (active), false (inactive)
     */
    status: boolean;

    /**
     * The timestamp representing when the species was created.
     * @example 1633590400 (Unix timestamp for a specific date and time)
     */
    createdAt: number;

    /**
     * The timestamp representing the last time the species information was updated.
     * @example 1633590400 (Unix timestamp for the last update date and time)
     */
    updatedAt: number;
}
