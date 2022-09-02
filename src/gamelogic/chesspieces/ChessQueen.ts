import Move from "../Move";
import MoveGenerator from "../MoveGenerator";
import ChessPiece from "./ChessPiece";

class ChessQueen extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter(): String {
    return "♕";
  }

  getMoves(x: number, y: number) {
    let moveList = new Set<Move>();

    MoveGenerator.generateHorizontalMoves(x, y, 100).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateVerticalMoves(x, y, 100).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateDiagonalMoves(x, y, 100).forEach(function (move) {
      moveList.add(move);
    });

    return moveList;
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  }
}

export default ChessQueen;
