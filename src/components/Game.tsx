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
    var piece: ChessPiece | null = boardCopy.getSquare(x, y)!.piece;




    if (board.selectionMode === -1) {
      if (boardCopy.activePlayer === boardCopy.getSquare(x, y)?.piece?.player) {

        boardCopy.possibleMoves.clear();

        if (piece === null) {
          setBoard(boardCopy);
          return;
        }
        boardCopy.lastSelectedSquare = new Coordinates(x, y);

        var possibleMoves: MoveSet = piece.getMoves(x, y);
        var currentSquare = boardCopy.getSquare(x, y)!;
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
        console.log("hello there");
        boardCopy.possibleMoves.clear();
        var lastSquare = boardCopy.lastSelectedSquare;
        boardCopy.movePiece(lastSquare!.x, lastSquare!.y, x, y);
        //movePiece(boardCopy.getSquare(x, y)?.piece ,new Move({x: lastSquare?.x, y: lastSquare?.y}, ))
        boardCopy.nextPlayer();
      } else {
        console.log("not so hello");
        boardCopy.possibleMoves.clear();
      }
      boardCopy.setSelectionMode(-1);
      setBoard(boardCopy);
    }
  }

  function movePiece(piece: ChessPiece, move: Move) {
    let boardCopy: ChessBoard = Object.create(board);
    boardCopy.movePiece(move.origin.x, move.origin.y, move.destination.x, move.destination.y);
    setBoard(boardCopy);
  }
}

export default Game;
