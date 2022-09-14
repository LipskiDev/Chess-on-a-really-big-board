import MoveSet from "../../utils/MoveSet";
import Move, { MoveType } from "../Move";
import MoveGenerator from "../MoveGenerator";
import ChessPiece from "./ChessPiece";

class ChessKnight extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getMoves(x: number, y: number) {
    let moveList = new MoveSet;

    MoveGenerator.generateCustomOffsetMoves(x, y, 1, 2).forEach(function (
      move
    ) {
      moveList.add(move);
    });

    return moveList;
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
