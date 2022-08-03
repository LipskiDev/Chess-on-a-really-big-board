import ChessPiece from "./ChessPiece";

class ChessBishop extends ChessPiece {
  getLetter(): String {
    return "♗";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
}

export default ChessBishop;
