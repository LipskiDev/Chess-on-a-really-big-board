import ChessPiece from "./ChessPiece";

class ChessRook extends ChessPiece {
  constructor(player: number) {
    super(player);

    //TODO: change the way moves are done
    //adds all allowed moves to the piece
    super.addHorizontalMoves();
    super.addVerticalMoves();
  }

  getLetter(): String {
    return "♖";
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  }
}

export default ChessRook;
