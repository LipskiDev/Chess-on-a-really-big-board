import { useState } from "react";
import ChessSquare from "../gamelogic/ChessSquare";

export function Square(props: {
  chessSquare: ChessSquare;
  squareColor: number;
  onClick: any;
  highlighted: boolean;
}) {
  var classString;
  if (props.highlighted === true) {
    classString =
      props.squareColor === 1
        ? "blackSquareHighlighted"
        : "whiteSquareHighlighted";
  } else {
    classString = props.squareColor === 1 ? "blackSquare" : "whiteSquare";
  }
  return (
    <button className={classString} onClick={props.onClick}>
      <img src={props.chessSquare.getImageForPiece()}></img>
    </button>
  );
}
