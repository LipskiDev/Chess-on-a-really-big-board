import ChessPiece from "./ChessPiece";

class ChessQueen extends ChessPiece {
  constructor(player: number) {
    super(player);

    //TODO: change the way moves are done
    //adds all allowed moves to the piece
    super.addHorizontalMoves();
    super.addVerticalMoves();
    super.addDiagonalMoves();
  }

  getLetter(): String {
    return "♕";
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  }
}

export default ChessQueen;
