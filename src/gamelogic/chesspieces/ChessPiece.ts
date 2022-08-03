abstract class ChessPiece {
  abstract getLetter(): String;

  abstract getAllowedMoves(): Set<{ x: number; y: number }>;
}

export default ChessPiece;
