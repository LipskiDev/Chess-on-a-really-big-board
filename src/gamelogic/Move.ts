import Coordinates from "../utils/Coordinates";
import ChessPiece from "./chesspieces/ChessPiece";

class Move {
  origin: Coordinates;
  destination: Coordinates;
  path: Coordinates[];
  moveType: MoveType[];

  constructor(
    origin: Coordinates,
    destination: Coordinates,
    path: Coordinates[],
    moveType: MoveType[]
  ) {
    this.origin = origin;
    this.destination = destination;
    this.path = path;
    this.moveType = moveType;
  }


}

export enum MoveType {
  normal,
  take,
  castles,
  promotion,
  start,
  noTake,
}

export default Move;
