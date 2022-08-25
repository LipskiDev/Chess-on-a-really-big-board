import ChessSquare from "../gamelogic/ChessSquare";
import { Matrix } from "../utils/Matrix";
import { Square } from "./Square";

export function Board(props: {
  chessBoard: Matrix<ChessSquare>;
  onClick: any;
  highlightedSquares: Set<string>;
}) {
  function renderSquare(
    chessSquare: ChessSquare,
    rowIndex: number,
    columnIndex: number
  ) {
    let isHighlighted = props.highlightedSquares.has(
      JSON.stringify({
        x: columnIndex,
        y: rowIndex,
      })
    );
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
    return props.chessBoard.map((row, rowIndex) => {
      return (
        <div className="board-row">
          {row.map((chessSquare, columnIndex) =>
            renderSquare(chessSquare, rowIndex, columnIndex)
          )}
        </div>
      );
    });
  }

  return <div>{renderBoard()}</div>;
}
