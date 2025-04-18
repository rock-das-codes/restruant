/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Represents directions between two locations.
 */
export interface Directions {
  /**
   * The distance between the two locations in meters.
   */
distanceMeters: number;
  /**
   * The estimated duration to travel between the two locations in seconds.
   */
durationSeconds: number;
  /**
   * Instructions for each step of the directions
   */
instructions: string[];
}

/**
 * Asynchronously retrieves directions between two locations using Google Maps.
 *
 * @param origin The starting location.
 * @param destination The destination location.
 * @returns A promise that resolves to a Directions object containing distance and duration.
 */
export async function getDirections(
  origin: Location,
  destination: Location
): Promise<Directions> {
  // TODO: Implement this by calling the Google Maps API.

  return {
    distanceMeters: 1609, // 1 mile in meters
    durationSeconds: 600, // 10 minutes in seconds
    instructions: ['Turn left', 'Turn right', 'You have arrived']
  };
}
