import { useState } from "react";
import "./App.css";

function Square(props: any) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props: any) {
  function renderSquare(i: number) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game(props: any) {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
    stepNumber: 0,
  });

  function jumpTo(step: number) {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  function handleClick(i: number) {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });
  }

  const history = state.history;
  console.log(state);
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((_step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (state.xIsNext ? "X" : "O");
  }

  return (
    <div className="container-mega-game-div">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol> {moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const emptySquares: { [square: number]: string } = {};

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    emptySquares[a] = squares[a];
    emptySquares[b] = squares[b];
    emptySquares[c] = squares[c];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  if (Object.values(emptySquares).every((value) => value !== null)) {
    return "No winner";
  }

  return null;
}

export default Game;
