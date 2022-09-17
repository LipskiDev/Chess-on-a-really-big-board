import Coordinates from "../../utils/Coordinates";
import MoveSet from "../../utils/MoveSet";
import Move from "../Move";
import MoveGenerator from "../MoveGenerator";
import ChessPiece from "./ChessPiece";

class ChessBishop extends ChessPiece {
  constructor(player: number) {
    super(player);

    //TODO: change the way moves are done
    //adds all allowed moves to the piece
  }

  getLetter(): String {
    return "♗";
  }

  getMoves(coordinates: Coordinates) {
    let moveList = new MoveSet;

    MoveGenerator.generateDiagonalMoves(coordinates, 100).forEach(function (move) {
      moveList.add(move);
    });

    return moveList;
  }

  getPicture(): string {
    if (this.player === 1)
      return "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
    else
      return "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
  }
}

export default ChessBishop;
