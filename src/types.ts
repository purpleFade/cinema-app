export interface Order {
  /** Unique identifier for the order */
  id: string;
  /** ID of the movie booked */
  movieId: string;
  /** Title of the movie booked */
  movieTitle: string;
  /** List of selected seat identifiers */
  seats: string[];
  /** ISO timestamp when the order was placed */
  date: string;
}
