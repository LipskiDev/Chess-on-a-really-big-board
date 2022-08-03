import Game from "./components/Game";
import ChessBoard from "./gamelogic/ChessBoard";
import "./App.css";

export function App() {
  const chessBoard = new ChessBoard(8, 8);

  return <Game chessBoard={chessBoard}></Game>;
}
