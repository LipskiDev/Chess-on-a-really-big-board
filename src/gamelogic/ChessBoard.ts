import { createMatrix, Matrix } from "../utils/Matrix";
import ChessSquare from "./ChessSquare";
import { SquarePiece } from "./ChessSquare";

class ChessBoard {
  public chessBoard: Matrix<ChessSquare>;

  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.chessBoard = createMatrix<ChessSquare>(
      this.width,
      this.height,
      new ChessSquare(SquarePiece.EMPTY)
    );
  }

  //moves a piece from (x1,y1) to (x2,y2)
  public movePiece(x1: number, y1: number, x2: number, y2: number): void {
    const currentSquare = this.chessBoard[x1][y1];
    this.chessBoard[x1][y1] = new ChessSquare(SquarePiece.EMPTY);
    this.chessBoard[x2][y2] = currentSquare;
  }
}

export default ChessBoard;
