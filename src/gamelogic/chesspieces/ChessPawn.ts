import MoveSet from "../../utils/MoveSet";
import Move, { MoveType } from "../Move";
import MoveGenerator from "../MoveGenerator";
import ChessPiece from "./ChessPiece";

class ChessPawn extends ChessPiece {
  readonly boardHeight;
  constructor(player: number, boardHeight: number) {
    super(player);
    this.boardHeight = boardHeight;
  }

  getLetter(): String {
    return "♙";
  }

  getMoves(x: number, y: number) {
    let moveList = new MoveSet;
    console.log(this.boardHeight);

    MoveGenerator.generatePawnMoves(
      x,
      y,
      this.player === 1 ? 1 : -1,
      this.boardHeight
    ).forEach(function (move) {
      moveList.add(move);
    });

    return moveList;
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
  }
}

export default ChessPawn;
