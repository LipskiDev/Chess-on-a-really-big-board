import ChessPiece from "./ChessPiece";

class ChessKing extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter() {
    return "♔";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
  }
}

export default ChessKing;
