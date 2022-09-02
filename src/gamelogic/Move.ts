class Move {
  destination: { x: number; y: number };
  path: { x: number; y: number }[];
  moveType: MoveType[];

  constructor(
    destination: { x: number; y: number },
    path: { x: number; y: number }[],
    moveType: MoveType[]
  ) {
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
