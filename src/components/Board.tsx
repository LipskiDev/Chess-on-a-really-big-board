import ChessSquare from "../gamelogic/ChessSquare";
import { Matrix } from "../utils/Matrix";
import { Square } from "./Square";

export function Board(props: { chessBoard: Matrix<ChessSquare> }) {
  function renderSquare(chessSquare: ChessSquare) {
    return <Square chessSquare={chessSquare} />;
  }

  function renderBoard() {
    return props.chessBoard.map((row) => {
      return (
        <div className="board-row">
          {row.map((chessSquare) => renderSquare(chessSquare))}
        </div>
      );
    });
  }

  return <div>{renderBoard()}</div>;
}
