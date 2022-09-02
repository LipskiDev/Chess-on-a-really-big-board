import Game from "./components/Game";
import ChessBoard from "./gamelogic/ChessBoard";
import "./App.css";

export function App() {
  let size = 8;
  const chessBoard = new ChessBoard(size, size);

  return <Game chessBoard={chessBoard}></Game>;
}
