import ChessPiece from "./ChessPiece";

class ChessKing extends ChessPiece {
  getLetter(): String {
    return "♔";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
}

export default ChessKing;
