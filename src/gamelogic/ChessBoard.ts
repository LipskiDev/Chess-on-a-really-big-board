import { createMatrix, Matrix } from "../utils/Matrix";
import ChessBishop from "./chesspieces/ChessBishop";
import ChessKing from "./chesspieces/ChessKing";
import ChessKnight from "./chesspieces/ChessKnight";
import ChessPawn from "./chesspieces/ChessPawn";
import ChessPiece from "./chesspieces/ChessPiece";
import ChessQueen from "./chesspieces/ChessQueen";
import ChessRook from "./chesspieces/ChessRook";
import ChessSquare from "./ChessSquare";

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
      new ChessSquare(null)
    );

    this.initChessBoard();
  }

  private initChessBoard() {
    //upper row
    this.setPiece(0, 0, new ChessRook(0));
    this.setPiece(0, 1, new ChessKnight(0));
    this.setPiece(0, 2, new ChessBishop(0));
    this.setPiece(0, 3, new ChessQueen(0));
    this.setPiece(0, 4, new ChessKing(0));
    this.setPiece(0, 5, new ChessBishop(0));
    this.setPiece(0, 6, new ChessKnight(0));
    this.setPiece(0, 7, new ChessRook(0));

    this.setPiece(1, 0, new ChessPawn(0));
    this.setPiece(1, 0, new ChessPawn(0));
    this.setPiece(1, 1, new ChessPawn(0));
    this.setPiece(1, 2, new ChessPawn(0));
    this.setPiece(1, 3, new ChessPawn(0));
    this.setPiece(1, 4, new ChessPawn(0));
    this.setPiece(1, 5, new ChessPawn(0));
    this.setPiece(1, 6, new ChessPawn(0));
    this.setPiece(1, 7, new ChessPawn(0));

    //lower row
    this.setPiece(7, 0, new ChessRook(1));
    this.setPiece(7, 1, new ChessKnight(1));
    this.setPiece(7, 2, new ChessBishop(1));
    this.setPiece(7, 3, new ChessQueen(1));
    this.setPiece(7, 4, new ChessKing(1));
    this.setPiece(7, 5, new ChessBishop(1));
    this.setPiece(7, 6, new ChessKnight(1));
    this.setPiece(7, 7, new ChessRook(1));

    this.setPiece(6, 0, new ChessPawn(1));
    this.setPiece(6, 0, new ChessPawn(1));
    this.setPiece(6, 1, new ChessPawn(1));
    this.setPiece(6, 2, new ChessPawn(1));
    this.setPiece(6, 3, new ChessPawn(1));
    this.setPiece(6, 4, new ChessPawn(1));
    this.setPiece(6, 5, new ChessPawn(1));
    this.setPiece(6, 6, new ChessPawn(1));
    this.setPiece(6, 7, new ChessPawn(1));
  }

  //moves a piece from (x1,y1) to (x2,y2)
  public movePiece(x1: number, y1: number, x2: number, y2: number): void {
    const currentPiece = this.chessBoard[x1][y1].piece;
    this.setPiece(x1, y1, null);
    this.setPiece(x2, y2, currentPiece);
  }

  //sets the square at coordinates (x,y) to the given piece newPiece
  public setPiece(x: number, y: number, newPiece: ChessPiece | null) {
    this.chessBoard[x][y] = new ChessSquare(newPiece);
  }
}

export default ChessBoard;
