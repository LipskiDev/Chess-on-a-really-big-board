import Coordinates from "../utils/Coordinates";
import CoordinateSet from "../utils/CoordinateSet";
import MoveSet from "../utils/MoveSet";
import ChessBoard from "./ChessBoard";
import ChessKing from "./chesspieces/ChessKing";
import ChessRook from "./chesspieces/ChessRook";
import ChessSquare from "./ChessSquare";
import Move, { MoveType } from "./Move";
import MoveGenerator from "./MoveGenerator";

class GameValidator {
  static isAllowedMove(move: Move, chessBoard: ChessBoard): boolean {
    let originSquare = chessBoard.getSquare(move.origin)!;
    let originCoords = move.origin;
    let isAllowed = true;
    //checks if destination square has piece of own team
    let moveSquare = chessBoard.getSquare(
      move.destination
    );
    if (originSquare.piece?.player === moveSquare?.piece?.player) {
      return false;
    }

    //checks if it is the first move a piece has done (right now exclusive for pawns)
    if (move.moveType.includes(MoveType.start)) {
      if (chessBoard.getSquare(originCoords)?.piece?.hasMoved === true) {
        return false;
      }
    }

    //checks if the move is an allowed castling move
    if (move.moveType.includes(MoveType.castles)) {
      if (!(chessBoard.getSquare(move.origin)!.piece instanceof ChessKing)) {
        return false;
      } else {

        let coordinatesInCheck = getCheckedSquares(chessBoard);

        //right castles
        if (move.origin.x < move.destination.x) {
          let rightRook = chessBoard.getSquare(new Coordinates(move.destination.x + 2, move.destination.y))?.piece;
          //checks if there is a rook in the right corner
          if (!(rightRook instanceof ChessRook)) {
            return false;
          } else {
            //checks if the rook hasn't moved yet
            if (rightRook.hasMoved === true) {
              return false;
            }
          }
        } else
          //left castles
          if (move.origin.x > move.destination.x) {
            let leftRook = chessBoard.getSquare(new Coordinates(move.destination.x - 1, move.destination.y))?.piece;
            //checks if there is a rook in the left corner
            if (!(leftRook instanceof ChessRook)) {
              return false;
            } else {
              //checks if the rook hasn't moved yet
              if (leftRook.hasMoved === true) {
                return false;
              }
            }
          }
      }
    }

    //checks if the move takes another piece
    if (move.moveType.includes(MoveType.take)) {
      if (moveSquare?.piece === null) {
        return false;
      }
    }

    //checks if the move does not take a piece
    if (move.moveType.includes(MoveType.noTake)) {
      if (moveSquare?.piece !== null) {
        if (originSquare.piece?.player !== moveSquare?.piece?.player) {
          return false;
        }
      }
    }

    //checks if there are no other pieces between start and end square
    isAllowed = true;
    move.path.forEach(function (pathSquare) {
      let currSquare = chessBoard.getSquare(pathSquare);
      if (currSquare === undefined || currSquare === null) {
        return false
      }
      if (currSquare.piece !== null) {
        isAllowed = false;
      }
    });

    return isAllowed;

  }

  static validateMoves(
    moveList: MoveSet,
    originCoords: Coordinates,
    chessBoard: ChessBoard
  ): MoveSet {
    let originSquare = chessBoard.getSquare(originCoords)!;
    console.log(moveList);
    let allowedMoves = new MoveSet;
    let isAllowed = true;

    //checks each move if it is allowed or not
    moveList.forEach(function (move) {
      if (GameValidator.isAllowedMove(move, chessBoard)) {
        allowedMoves.add(move);
      }
    });

    return allowedMoves;
  }
}

export default GameValidator;
function getCheckedSquares(chessBoard: ChessBoard): { checkedForWhite: CoordinateSet, checkedForBlack: CoordinateSet } {
  let checkedSquares = { checkedForWhite: new CoordinateSet, checkedForBlack: new CoordinateSet };
  for (let j = 0; j < chessBoard.width; j++) {
    for (let i = 0; i < chessBoard.height; i++) {
      let piece = chessBoard.getSquare(new Coordinates(i, j))?.piece;
      if (piece === null) continue;
      let pieceMoves = piece!.getMoves(new Coordinates(i, j));
      if (piece instanceof ChessKing) continue;

      pieceMoves.forEach(function (move) {

        let coordinate = move.destination;
        if (coordinate.x >= chessBoard.width
          || coordinate.y >= chessBoard.height
          || coordinate.x < 0
          || coordinate.y < 0) return;

        if (move.moveType.includes(MoveType.take)) {
          piece?.player === 0
            ? checkedSquares.checkedForWhite.add(move.destination)
            : checkedSquares.checkedForBlack.add(move.destination);
          return;
        }
        if ((GameValidator.isAllowedMove(move, chessBoard))) {
          if (move.moveType.includes(MoveType.noTake) || move.moveType.includes(MoveType.castles)) return;



          piece?.player === 0
            ? checkedSquares.checkedForWhite.add(move.destination)
            : checkedSquares.checkedForBlack.add(move.destination);
        }

      })

    }

  }
  console.log("piece moves: ")
  console.log(checkedSquares);
  return checkedSquares;
}

