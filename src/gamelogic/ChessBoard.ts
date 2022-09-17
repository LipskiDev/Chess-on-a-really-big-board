import Coordinates from "../utils/Coordinates";
import { createMatrix, Matrix } from "../utils/Matrix";
import MoveSet from "../utils/MoveSet";
import ChessBishop from "./chesspieces/ChessBishop";
import ChessKing from "./chesspieces/ChessKing";
import ChessKnight from "./chesspieces/ChessKnight";
import ChessPawn from "./chesspieces/ChessPawn";
import ChessPiece from "./chesspieces/ChessPiece";
import ChessQueen from "./chesspieces/ChessQueen";
import ChessRook from "./chesspieces/ChessRook";
import ChessSquare from "./ChessSquare";
import Move from "./Move";

class ChessBoard {
  public chessBoard: Matrix<ChessSquare>;

  public width: number;
  public height: number;

  public lastSelectedSquare: Coordinates | null;
  public selectionMode: number;

  public possibleMoves: MoveSet;

  public activePlayer = 1;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.lastSelectedSquare = null;
    this.selectionMode = -1;

    this.possibleMoves = new MoveSet;

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

    this.setPiece(new Coordinates(0, 0), new ChessRook(1));
    this.setPiece(new Coordinates(1, 0), new ChessKnight(1));
    this.setPiece(new Coordinates(2, 0), new ChessBishop(1));
    this.setPiece(new Coordinates(3, 0), new ChessKing(1, this.width));
    this.setPiece(new Coordinates(4, 0), new ChessQueen(1));
    this.setPiece(new Coordinates(5, 0), new ChessBishop(1));
    this.setPiece(new Coordinates(6, 0), new ChessKnight(1));
    this.setPiece(new Coordinates(7, 0), new ChessRook(1));

    this.setPiece(new Coordinates(0, 1), new ChessPawn(1, this.height));
    this.setPiece(new Coordinates(1, 1), new ChessPawn(1, this.height));
    this.setPiece(new Coordinates(2, 1), new ChessPawn(1, this.height));
    this.setPiece(new Coordinates(3, 1), new ChessPawn(1, this.height));
    this.setPiece(new Coordinates(4, 1), new ChessPawn(1, this.height));
    this.setPiece(new Coordinates(5, 1), new ChessPawn(1, this.height));
    this.setPiece(new Coordinates(6, 1), new ChessPawn(1, this.height));
    this.setPiece(new Coordinates(7, 1), new ChessPawn(1, this.height));

    //lower row
    this.setPiece(new Coordinates(0, 7), new ChessRook(0));
    this.setPiece(new Coordinates(1, 7), new ChessKnight(0));
    this.setPiece(new Coordinates(2, 7), new ChessBishop(0));
    this.setPiece(new Coordinates(3, 7), new ChessKing(0, this.width));
    this.setPiece(new Coordinates(4, 7), new ChessQueen(0));
    this.setPiece(new Coordinates(5, 7), new ChessBishop(0));
    this.setPiece(new Coordinates(6, 7), new ChessKnight(0));
    this.setPiece(new Coordinates(7, 7), new ChessRook(0));

    this.setPiece(new Coordinates(0, 6), new ChessPawn(0, this.height));
    this.setPiece(new Coordinates(1, 6), new ChessPawn(0, this.height));
    this.setPiece(new Coordinates(2, 6), new ChessPawn(0, this.height));
    this.setPiece(new Coordinates(3, 6), new ChessPawn(0, this.height));
    this.setPiece(new Coordinates(4, 6), new ChessPawn(0, this.height));
    this.setPiece(new Coordinates(5, 6), new ChessPawn(0, this.height));
    this.setPiece(new Coordinates(6, 6), new ChessPawn(0, this.height));
    this.setPiece(new Coordinates(7, 6), new ChessPawn(0, this.height));
  }

  //moves a piece from (x1,y1) to (x2,y2)
  public movePiece(coordinates1: Coordinates, coordinates2: Coordinates): void {
    const currentPiece = this.chessBoard[coordinates1.y][coordinates1.x].piece;
    currentPiece?.setHasMoved;
    this.setPiece(coordinates1, null);
    this.setPiece(coordinates2, currentPiece);

    console.log(
      "Moved piece from (" + coordinates1.x + ", " + coordinates1.y + ") to (" + coordinates2.x + ", " + coordinates2.y + ")"
    );
  }

  //sets the square at coordinates (x,y) to the given piece newPiece
  public setPiece(coordinates: Coordinates, newPiece: ChessPiece | null) {
    this.chessBoard[coordinates.y][coordinates.x] = new ChessSquare(newPiece);
  }

  public getSquare(coordinates: Coordinates): ChessSquare | null {
    try {
      let square = this.chessBoard[coordinates.y][coordinates.x];
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
