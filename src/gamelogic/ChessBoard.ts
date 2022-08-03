import { createMatrix, Matrix } from "../utils/Matrix";
import ChessBishop from "./chesspieces/ChessBishop";
import ChessEmpty from "./chesspieces/ChessEmpty";
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
      new ChessSquare(new ChessEmpty())
    );

    this.initChessBoard();
  }

  private initChessBoard() {
    //upper row
    this.setPiece(0, 0, new ChessRook());
    this.setPiece(0, 1, new ChessKnight());
    this.setPiece(0, 2, new ChessBishop());
    this.setPiece(0, 3, new ChessQueen());
    this.setPiece(0, 4, new ChessKing());
    this.setPiece(0, 5, new ChessBishop());
    this.setPiece(0, 6, new ChessKnight());
    this.setPiece(0, 7, new ChessRook());

    this.setPiece(1, 0, new ChessPawn());
    this.setPiece(1, 0, new ChessPawn());
    this.setPiece(1, 1, new ChessPawn());
    this.setPiece(1, 2, new ChessPawn());
    this.setPiece(1, 3, new ChessPawn());
    this.setPiece(1, 4, new ChessPawn());
    this.setPiece(1, 5, new ChessPawn());
    this.setPiece(1, 6, new ChessPawn());
    this.setPiece(1, 7, new ChessPawn());

    //lower row
    this.setPiece(7, 0, new ChessRook());
    this.setPiece(7, 1, new ChessKnight());
    this.setPiece(7, 2, new ChessBishop());
    this.setPiece(7, 3, new ChessQueen());
    this.setPiece(7, 4, new ChessKing());
    this.setPiece(7, 5, new ChessBishop());
    this.setPiece(7, 6, new ChessKnight());
    this.setPiece(7, 7, new ChessRook());

    this.setPiece(6, 0, new ChessPawn());
    this.setPiece(6, 0, new ChessPawn());
    this.setPiece(6, 1, new ChessPawn());
    this.setPiece(6, 2, new ChessPawn());
    this.setPiece(6, 3, new ChessPawn());
    this.setPiece(6, 4, new ChessPawn());
    this.setPiece(6, 5, new ChessPawn());
    this.setPiece(6, 6, new ChessPawn());
    this.setPiece(6, 7, new ChessPawn());
  }

  //moves a piece from (x1,y1) to (x2,y2)
  public movePiece(x1: number, y1: number, x2: number, y2: number): void {
    const currentSquare = this.chessBoard[x1][y1];
    this.chessBoard[x1][y1] = new ChessSquare(new ChessEmpty());
    this.chessBoard[x2][y2] = currentSquare;
  }

  //sets the square at coordinates (x,y) to the given piece newPiece
  public setPiece(x: number, y: number, newPiece: ChessPiece) {
    this.chessBoard[x][y] = new ChessSquare(newPiece);
  }
}

export default ChessBoard;
