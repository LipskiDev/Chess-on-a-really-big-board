import ChessSquare from "../gamelogic/ChessSquare";
import Move from "../gamelogic/Move";
import Coordinates from "../utils/Coordinates";
import { Matrix } from "../utils/Matrix";
import MoveSet from "../utils/MoveSet";
import { Square } from "./Square";

export function Board(props: {
  chessBoard: Matrix<ChessSquare>;
  onClick: any;
  possibleMoves: MoveSet;
}) {
  function renderSquare(
    chessSquare: ChessSquare,
    rowIndex: number,
    columnIndex: number
  ) {
    let isHighlighted = props.possibleMoves.containsDestination(new Coordinates(rowIndex, columnIndex));

    return (
      <Square
        chessSquare={chessSquare}
        squareColor={(rowIndex + columnIndex) % 2 === 1 ? 1 : 0}
        onClick={() => props.onClick(rowIndex, columnIndex)}
        highlighted={isHighlighted}
      />
    );
  }

  function renderBoard() {
    return props.chessBoard.map((column, columnIndex) => {
      return (
        <div className="board-row">
          {column.map((chessSquare, rowIndex) =>
            renderSquare(chessSquare, rowIndex, columnIndex)
          )}
        </div>
      );
    });
  }

  return <div>{renderBoard()}</div>;
}
