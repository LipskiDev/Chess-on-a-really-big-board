import ChessSquare from "../gamelogic/ChessSquare";

export function Square(props: { chessSquare: ChessSquare }) {
  return (
    <button className="square">{props.chessSquare.piece.getLetter()}</button>
  );
}
