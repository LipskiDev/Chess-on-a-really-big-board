class ChessSquare {
  readonly piece;
  constructor(piece: SquarePiece) {
    this.piece = piece;
  }
}

export enum SquarePiece {
  EMPTY,
  PAWN,
  BISHOP,
  QUEEN,
  KING,
  ROOK,
  KNIGHT,
}

export default ChessSquare;
