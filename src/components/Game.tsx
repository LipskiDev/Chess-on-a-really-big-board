import { useState } from "react";
import ChessBoard from "../gamelogic/ChessBoard";
import { Board } from "./Board";
import ChessPiece from "../gamelogic/chesspieces/ChessPiece";
import MoveValidator from "../gamelogic/GameValidator";
import Move from "../gamelogic/Move";
import GameValidator from "../gamelogic/GameValidator";

function Game(props: { chessBoard: ChessBoard }) {
  const [board, setBoard] = useState(props.chessBoard);
  return (
    <div className="container-mega-game-div">
      <div className="game-board">
        <Board
          chessBoard={props.chessBoard.chessBoard}
          onClick={(x: number, y: number) => handleClick(x, y)}
          highlightedSquares={props.chessBoard.highlightedSquares}
        />
      </div>
    </div>
  );

  function handleClick(x: number, y: number) {
    let boardCopy: ChessBoard = Object.create(board);
    var piece: ChessPiece | null = boardCopy.getSquare(x, y)!.piece;

    if (board.selectionMode === -1) {
      boardCopy.highlightedSquares.clear();

      if (piece === null) {
        setBoard(boardCopy);
        return;
      }
      boardCopy.lastSelectedSquare = { x: x, y: y };

      var possibleMoves: Set<Move> = piece.getMoves(x, y);
      var currentSquare = boardCopy.getSquare(x, y)!;
      possibleMoves = GameValidator.validateMoves(
        possibleMoves,
        { x: x, y: y },
        boardCopy
      );

      possibleMoves.forEach(function (move) {
        boardCopy.highlightedSquares.add(
          JSON.stringify({
            x: move.destination.x,
            y: move.destination.y,
          })
        );
      });

      boardCopy.selectionMode = 1;
      setBoard(boardCopy);
    } else if (board.selectionMode === 1) {
      if (boardCopy.highlightedSquares.has(JSON.stringify({ x: x, y: y }))) {
        boardCopy.highlightedSquares.clear();
        var lastSquare = boardCopy.lastSelectedSquare;
        boardCopy.movePiece(lastSquare!.x, lastSquare!.y, x, y);
      } else {
        boardCopy.highlightedSquares.clear();
      }
      boardCopy.setSelectionMode(-1);
      setBoard(boardCopy);
    }
  }
}

export default Game;
