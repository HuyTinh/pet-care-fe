// Define the IComment interface to represent the structure of a comment object
export interface IComment {
  // 'id' is a unique identifier for the comment (number)
  id: number;

  // 'content' is the text content of the comment (string)
  content: string;

  // 'avatar' is the URL of the avatar image for the user who made the comment (string)
  avatar: string;

  // 'user' is the name of the user who posted the comment (string)
  user: string;

  // 'userId' is a unique identifier for the user who posted the comment (number)
  userId: number;

  // 'time' is a string representing the timestamp when the comment was posted (string)
  time: string;

  // 'rating' is a number representing the rating given with the comment (e.g., 1-5 stars) (number)
  rating: number;
}
