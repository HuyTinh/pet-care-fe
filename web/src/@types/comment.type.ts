/**
 * Interface representing the structure of a comment object.
 */
export interface IComment {
  /**
   * Unique identifier for the comment.
   * @example 101
   */
  id: number;

  /**
   * Text content of the comment.
   * @example "Great article! Very informative."
   */
  content: string;

  /**
   * URL of the avatar image for the user who made the comment.
   * @example "https://example.com/images/avatar.jpg"
   */
  avatar: string;

  /**
   * Name of the user who posted the comment.
   * @example "Alice Smith"
   */
  user: string;

  /**
   * Unique identifier for the user who posted the comment.
   * @example 1001
   */
  userId: number;

  /**
   * Timestamp representing when the comment was posted.
   * @example "2024-11-15T14:30:00Z"
   */
  time: string;

  /**
   * Rating given with the comment, typically in a range (e.g., 1-5 stars).
   * @example 5
   */
  rating: number;
}
