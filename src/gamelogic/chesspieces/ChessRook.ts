import Coordinates from "../../utils/Coordinates";
import MoveSet from "../../utils/MoveSet";
import Move from "../Move";
import MoveGenerator from "../MoveGenerator";
import ChessPiece from "./ChessPiece";

class ChessRook extends ChessPiece {
  constructor(player: number) {
    super(player);
  }

  getLetter(): String {
    return "♖";
  }

  getMoves(coordinates: Coordinates) {
    let moveList = new MoveSet;

    MoveGenerator.generateHorizontalMoves(coordinates, 100).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateVerticalMoves(coordinates, 100).forEach(function (move) {
      moveList.add(move);
    });

    return moveList;
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  }
}

export default ChessRook;
