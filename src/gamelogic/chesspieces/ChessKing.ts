import MoveSet from "../../utils/MoveSet";
import Move from "../Move";
import MoveGenerator from "../MoveGenerator";
import ChessPiece from "./ChessPiece";

class ChessKing extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter() {
    return "♔";
  }

  getMoves(x: number, y: number) {
    let moveList = new MoveSet;

    MoveGenerator.generateHorizontalMoves(x, y, 1).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateVerticalMoves(x, y, 1).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateDiagonalMoves(x, y, 1).forEach(function (move) {
      moveList.add(move);
    });

    return moveList;
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
  }
}

export default ChessKing;
