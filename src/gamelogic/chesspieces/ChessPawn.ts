import ChessPiece from "./ChessPiece";

class ChessPawn extends ChessPiece {
  constructor(player: number) {
    super(player);

    //TODO: change the way moves are done
    //adds all allowed moves to the piece
    this.moves.add({ x: 0, y: 1 });
    this.moves.add({ x: 0, y: 2 });
  }

  getLetter(): String {
    return "♙";
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
  }
}

export default ChessPawn;
