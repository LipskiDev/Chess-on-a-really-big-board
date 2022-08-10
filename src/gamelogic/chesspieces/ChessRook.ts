import ChessPiece from "./ChessPiece";

class ChessRook extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter(): String {
    return "♖";
  }
  getAllowedMoves(): Set<{ x: number; y: number }> {
    throw new Error("Method not implemented.");
  }
  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  }
}

export default ChessRook;
