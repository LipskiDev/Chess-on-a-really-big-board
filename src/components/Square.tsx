import ChessSquare from "../gamelogic/ChessSquare";

export function Square(props: {
  chessSquare: ChessSquare;
  squareColor: number;
}) {
  return (
    <button className={props.squareColor === 1 ? "blackSquare" : "whiteSquare"}>
      <img src={props.chessSquare.getImageForPiece()}></img>
    </button>
  );
}
