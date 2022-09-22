import { useState } from "react";
import ChessBoard from "../gamelogic/ChessBoard";
import { Board } from "./Board";
import ChessPiece from "../gamelogic/chesspieces/ChessPiece";
import MoveValidator from "../gamelogic/GameValidator";
import Move from "../gamelogic/Move";
import GameValidator from "../gamelogic/GameValidator";
import Coordinates from "../utils/Coordinates";
import MoveSet from "../utils/MoveSet";

function Game(props: { chessBoard: ChessBoard }) {
  const [board, setBoard] = useState(props.chessBoard);

  return (
    <div className="container-mega-game-div">
      <div className="game-board">
        <Board
          chessBoard={props.chessBoard.chessBoard}
          onClick={(x: number, y: number) => handleClick(x, y)}
          possibleMoves={props.chessBoard.possibleMoves}
        />
      </div>
    </div>
  );

  function handleClick(x: number, y: number) {
    let boardCopy: ChessBoard = Object.create(board);
    var piece: ChessPiece | null = boardCopy.getSquare(new Coordinates(x, y))!.piece;




    if (board.selectionMode === -1) {
      if (boardCopy.activePlayer === boardCopy.getSquare(new Coordinates(x, y))?.piece?.player) {

        boardCopy.possibleMoves.clear();

        if (piece === null) {
          setBoard(boardCopy);
          return;
        }
        boardCopy.lastSelectedSquare = new Coordinates(x, y);

        var possibleMoves: MoveSet = piece.getMoves(new Coordinates(x, y));
        var currentSquare = boardCopy.getSquare(new Coordinates(x, y))!;
        possibleMoves = GameValidator.validateMoves(
          possibleMoves,
          new Coordinates(x, y),
          boardCopy
        );

        possibleMoves.forEach(function (move) {
          boardCopy.possibleMoves.add(
            move
          );
        });
        console.log(boardCopy.possibleMoves)
        boardCopy.selectionMode = 1;

        setBoard(boardCopy);
      }
    } else if (board.selectionMode === 1) {
      if (boardCopy.possibleMoves.containsDestination(new Coordinates(x, y))) {
        let todo = boardCopy.possibleMoves.getMoveForDestination(new Coordinates(x, y));

        boardCopy.possibleMoves.clear();
        var lastSquare = boardCopy.lastSelectedSquare;
        boardCopy.evalMove(todo);
        boardCopy.nextPlayer();
      } else {
        boardCopy.possibleMoves.clear();
      }
      boardCopy.setSelectionMode(-1);
      setBoard(boardCopy);
    }
  }

  function evalMove(piece: ChessPiece | null, move: Move, chessBoard: ChessBoard): ChessBoard {

    chessBoard.movePiece(move.origin, move.destination);
    chessBoard.getSquare(move.destination)?.piece?.setHasMoved();
    return chessBoard;
  }
}

export default Game;
