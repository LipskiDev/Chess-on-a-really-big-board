import ChessPiece from "./ChessPiece";

class ChessPawn extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter(): String {
    return "♙";
  }

  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
  }
}

export default ChessPawn;
