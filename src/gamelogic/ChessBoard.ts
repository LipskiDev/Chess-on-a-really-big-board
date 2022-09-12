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

  public lastSelectedSquare: { x: number; y: number } | null;
  public selectionMode: number;

  public highlightedSquares: Set<string>;

  public activePlayer = 1;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.lastSelectedSquare = null;
    this.selectionMode = -1;

    this.highlightedSquares = new Set<string>();

    this.chessBoard = createMatrix<ChessSquare>(
      this.width,
      this.height,
      new ChessSquare(null)
    );

    this.initChessBoard();
  }

  public copy() {
    return this;
  }

  private initChessBoard() {
    //upper row
    this.setPiece(0, 0, new ChessRook(1));
    this.setPiece(1, 0, new ChessKnight(1));
    this.setPiece(2, 0, new ChessBishop(1));
    this.setPiece(3, 0, new ChessKing(1));
    this.setPiece(4, 0, new ChessQueen(1));
    this.setPiece(5, 0, new ChessBishop(1));
    this.setPiece(6, 0, new ChessKnight(1));
    this.setPiece(7, 0, new ChessRook(1));

    this.setPiece(0, 1, new ChessPawn(1, this.height));
    this.setPiece(0, 1, new ChessPawn(1, this.height));
    this.setPiece(1, 1, new ChessPawn(1, this.height));
    this.setPiece(2, 1, new ChessPawn(1, this.height));
    this.setPiece(3, 1, new ChessPawn(1, this.height));
    this.setPiece(4, 1, new ChessPawn(1, this.height));
    this.setPiece(5, 1, new ChessPawn(1, this.height));
    this.setPiece(6, 1, new ChessPawn(1, this.height));
    this.setPiece(7, 1, new ChessPawn(1, this.height));

    //lower row
    this.setPiece(0, 7, new ChessRook(0));
    this.setPiece(1, 7, new ChessKnight(0));
    this.setPiece(2, 7, new ChessBishop(0));
    this.setPiece(3, 7, new ChessKing(0));
    this.setPiece(4, 7, new ChessQueen(0));
    this.setPiece(5, 7, new ChessBishop(0));
    this.setPiece(6, 7, new ChessKnight(0));
    this.setPiece(7, 7, new ChessRook(0));

    this.setPiece(0, 6, new ChessPawn(0, this.height));
    this.setPiece(0, 6, new ChessPawn(0, this.height));
    this.setPiece(1, 6, new ChessPawn(0, this.height));
    this.setPiece(2, 6, new ChessPawn(0, this.height));
    this.setPiece(3, 6, new ChessPawn(0, this.height));
    this.setPiece(4, 6, new ChessPawn(0, this.height));
    this.setPiece(5, 6, new ChessPawn(0, this.height));
    this.setPiece(6, 6, new ChessPawn(0, this.height));
    this.setPiece(7, 6, new ChessPawn(0, this.height));
  }

  //moves a piece from (x1,y1) to (x2,y2)
  public movePiece(x1: number, y1: number, x2: number, y2: number): void {
    const currentPiece = this.chessBoard[y1][x1].piece;
    this.setPiece(x1, y1, null);
    this.setPiece(x2, y2, currentPiece);
    console.log(
      "Moved piece from (" + x1 + ", " + y1 + ") to (" + x2 + ", " + y2 + ")"
    );
  }

  //sets the square at coordinates (x,y) to the given piece newPiece
  public setPiece(x: number, y: number, newPiece: ChessPiece | null) {
    this.chessBoard[y][x] = new ChessSquare(newPiece);
  }

  public getSquare(x: number, y: number): ChessSquare | null {
    try {
      let square = this.chessBoard[y][x];
      return square;
    } catch {
      return null;
    }
  }

  public setSelectionMode(mode: number) {
    this.selectionMode = mode;
  }

  public nextPlayer() {
    this.activePlayer = (this.activePlayer + 1) % 2;
  }
}

export default ChessBoard;
