import ChessPiece from "./ChessPiece";

class ChessKnight extends ChessPiece {
  constructor(player: number) {
    super(player);

    //TODO: change the way moves are done
    //adds all allowed moves to the piece
    this.moves.add({ x: -1, y: 2 });
    this.moves.add({ x: 1, y: 2 });
    this.moves.add({ x: -1, y: -2 });
    this.moves.add({ x: 1, y: -2 });
    this.moves.add({ x: -2, y: 1 });
    this.moves.add({ x: -2, y: -1 });
    this.moves.add({ x: 2, y: 1 });
    this.moves.add({ x: 2, y: -1 });
  }

  getLetter(): String {
    return "♘";
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
  }
}

export default ChessKnight;
