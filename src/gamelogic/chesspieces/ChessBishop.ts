import ChessPiece from "./ChessPiece";

class ChessBishop extends ChessPiece {
  getLetter(): String {
    return "♗";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
  }
}

export default ChessBishop;
