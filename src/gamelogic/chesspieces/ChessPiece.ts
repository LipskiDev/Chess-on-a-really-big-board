abstract class ChessPiece {
  player: number;
  constructor(player: number) {
    this.player = player;
  }
  abstract getLetter(): String;

  abstract getAllowedMoves(): Set<{ x: number; y: number }>;

  abstract getPicture(): string;
}

export default ChessPiece;
