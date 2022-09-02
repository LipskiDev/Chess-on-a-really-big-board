import ChessBoard from "./ChessBoard";
import ChessSquare from "./ChessSquare";
import Move, { MoveType } from "./Move";

class GameValidator {
  static validateMoves(
    moveList: Set<Move>,
    originCoords: { x: number; y: number },
    chessBoard: ChessBoard
  ): Set<Move> {
    let originSquare = chessBoard.getSquare(originCoords.x, originCoords.y)!;
    console.log(moveList);
    let allowedMoves = new Set<Move>();
    let isAllowed = true;

    //checks each move if it is allowed or not
    moveList.forEach(function (move) {
      //checks if destination square has piece of own team
      let moveSquare = chessBoard.getSquare(
        move.destination.x,
        move.destination.y
      );
      if (originSquare.piece?.player === moveSquare?.piece?.player) {
        return;
      }

      //checks if it is the first move a piece has done (right now exclusive for pawns)
      if (move.moveType.includes(MoveType.start)) {
        if (
          chessBoard.getSquare(originCoords.x, originCoords.y)?.piece
            ?.player === 1
        ) {
          if (originCoords.y !== 1) {
            return;
          }
        } else {
          if (originCoords.y !== chessBoard.height - 2) {
            return;
          }
        }
      }

      //checks if the move done takes another piece
      if (move.moveType.includes(MoveType.take)) {
        if (moveSquare?.piece === null) {
          return;
        }
      }

      //checks if the move does not take a piece
      if (move.moveType.includes(MoveType.noTake)) {
        if (moveSquare?.piece !== null) {
          if (originSquare.piece?.player !== moveSquare?.piece?.player) {
            return;
          }
        }
      }

      //checks if there are no other pieces between start and end square
      isAllowed = true;
      move.path.forEach(function (pathSquare) {
        let currSquare = chessBoard.getSquare(pathSquare.x, pathSquare.y);
        if (currSquare === undefined || currSquare === null) {
          return;
        }
        if (currSquare.piece !== null) {
          isAllowed = false;
        }
      });
      if (isAllowed === true) {
        allowedMoves.add(move);
      }
    });

    return allowedMoves;
  }
}

export default GameValidator;
