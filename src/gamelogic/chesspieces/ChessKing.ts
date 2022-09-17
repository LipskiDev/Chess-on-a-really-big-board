import Coordinates from "../../utils/Coordinates";
import MoveSet from "../../utils/MoveSet";
import Move from "../Move";
import MoveGenerator from "../MoveGenerator";
import ChessPiece from "./ChessPiece";

class ChessKing extends ChessPiece {
  boardWidth: number;
  constructor(player: number, boardWidth: number) {
    super(player);
    this.boardWidth = boardWidth;
  }

  getLetter() {
    return "♔";
  }

  getMoves(coordinates: Coordinates) {
    let moveList = new MoveSet;

    MoveGenerator.generateHorizontalMoves(coordinates, 1).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateVerticalMoves(coordinates, 1).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateDiagonalMoves(coordinates, 1).forEach(function (move) {
      moveList.add(move);
    });

    MoveGenerator.generateKingsCastleMoves(coordinates, this.boardWidth).forEach(function (move) {
      moveList.add(move);
    })

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
