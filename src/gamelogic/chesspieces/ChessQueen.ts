import ChessPiece from "./ChessPiece";

class ChessQueen extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter(): String {
    return "♕";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  }
}

export default ChessQueen;
