import { useState } from "react";
import ChessBoard from "../gamelogic/ChessBoard";
import ChessSquare from "../gamelogic/ChessSquare";
import ChessPawn from "../gamelogic/chesspieces/ChessPawn";
import { Board } from "./Board";
import ChessRook from "../gamelogic/chesspieces/ChessRook";
import ChessPiece from "../gamelogic/chesspieces/ChessPiece";
import ChessQueen from "../gamelogic/chesspieces/ChessQueen";

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

    if (board.selectionMode === -1) {
      boardCopy.highlightedSquares.clear();

      var piece: ChessPiece | null = boardCopy.getPiece(x, y);
      if (piece === null) {
        setBoard(boardCopy);
        return;
      }
      boardCopy.lastSelectedSquare = { x: x, y: y };

      var possibleMoves: Set<{ x: number; y: number }> =
        piece.getAllowedMoves();
      possibleMoves.forEach(function (move) {
        boardCopy.highlightedSquares.add(
          JSON.stringify({ x: y + move.x, y: x + move.y })
        );
      });

      boardCopy.selectionMode = 1;
      setBoard(boardCopy);
    } else if (board.selectionMode === 1) {
      if (boardCopy.highlightedSquares.has(JSON.stringify({ x: y, y: x }))) {
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
