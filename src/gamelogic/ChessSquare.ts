import ChessPiece from "./chesspieces/ChessPiece";

class ChessSquare {
  piece: ChessPiece;
  constructor(piece: ChessPiece) {
    this.piece = piece;
  }

  getLetterForPiece() {
    return this.piece.getLetter;
  }
}

export default ChessSquare;
