export default class Coordinates {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public equals(coordinates: Coordinates): boolean {
    return this.x === coordinates.x && this.y === coordinates.y;
  }
}
