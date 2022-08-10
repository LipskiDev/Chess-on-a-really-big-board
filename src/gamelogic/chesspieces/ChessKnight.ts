import ChessPiece from "./ChessPiece";

class ChessKnight extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter(): String {
    return "♘";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
  }
}

export default ChessKnight;
