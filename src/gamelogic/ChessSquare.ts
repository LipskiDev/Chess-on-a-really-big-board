import ChessPiece from "./chesspieces/ChessPiece";

class ChessSquare {
  piece: ChessPiece | null;
  constructor(piece: ChessPiece | null) {
    this.piece = piece;
  }

  getImageForPiece(): string {
    if (this.piece === null) return "";
    return this.piece.getPicture();
  }

  setPiece(piece: ChessPiece | null) {
    this.piece = piece;
  }
}

export default ChessSquare;
