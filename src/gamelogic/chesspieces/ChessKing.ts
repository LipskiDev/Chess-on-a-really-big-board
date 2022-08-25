import ChessPiece from "./ChessPiece";

class ChessKing extends ChessPiece {
  constructor(player: number) {
    super(player);

    //TODO: change the way moves are done
    //adds all allowed moves to the piece
    this.moves.add({ x: 0, y: 1 });
    this.moves.add({ x: 1, y: 1 });
    this.moves.add({ x: -1, y: 1 });
    this.moves.add({ x: 1, y: 0 });
    this.moves.add({ x: -1, y: 0 });
    this.moves.add({ x: 0, y: -1 });
    this.moves.add({ x: 1, y: -1 });
    this.moves.add({ x: -1, y: -1 });
  }

  getLetter() {
    return "♔";
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
  }
}

export default ChessKing;
