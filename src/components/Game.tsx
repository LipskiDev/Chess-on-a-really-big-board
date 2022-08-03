import ChessBoard from "../gamelogic/ChessBoard";
import { Board } from "./Board";

function Game(props: { chessBoard: ChessBoard }) {
  return (
    <div className="container-mega-game-div">
      <div className="game-board">
        <Board chessBoard={props.chessBoard.chessBoard} />
      </div>
    </div>
  );
}

export default Game;
