import ChessPiece from "./ChessPiece";

class ChessQueen extends ChessPiece {
  getLetter(): String {
    return "♕";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
}

export default ChessQueen;
