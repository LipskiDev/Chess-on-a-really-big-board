abstract class ChessPiece {
  player: number;
  moves: Set<{ x: number; y: number }>;

  constructor(player: number) {
    this.player = player;
    this.moves = new Set<{ x: number; y: number }>();
  }

  abstract getLetter(): String;

  //TODO: change the way moves are done
  //returns the negated moves in case the player plays black
  getAllowedMoves(): Set<{ x: number; y: number }> {
    let newMoves = new Set<{ x: number; y: number }>();

    if (this.player === 0) {
      this.moves.forEach(function (move) {
        newMoves.add({ x: -move.x, y: -move.y });
      });
    } else {
      this.moves.forEach(function (move) {
        newMoves.add({ x: move.x, y: move.y });
      });
    }

    return newMoves;
  }

  //TODO: change the way moves are done
  addDiagonalMoves() {
    this.moves.add({ x: 1, y: 1 });
    this.moves.add({ x: 2, y: 2 });
    this.moves.add({ x: 3, y: 3 });
    this.moves.add({ x: 4, y: 4 });
    this.moves.add({ x: 5, y: 5 });
    this.moves.add({ x: 6, y: 6 });
    this.moves.add({ x: 7, y: 7 });
    this.moves.add({ x: 8, y: 8 });

    this.moves.add({ x: -1, y: 1 });
    this.moves.add({ x: -2, y: 2 });
    this.moves.add({ x: -3, y: 3 });
    this.moves.add({ x: -4, y: 4 });
    this.moves.add({ x: -5, y: 5 });
    this.moves.add({ x: -6, y: 6 });
    this.moves.add({ x: -7, y: 7 });
    this.moves.add({ x: -8, y: 8 });

    this.moves.add({ x: 1, y: -1 });
    this.moves.add({ x: 2, y: -2 });
    this.moves.add({ x: 3, y: -3 });
    this.moves.add({ x: 4, y: -4 });
    this.moves.add({ x: 5, y: -5 });
    this.moves.add({ x: 6, y: -6 });
    this.moves.add({ x: 7, y: -7 });
    this.moves.add({ x: 8, y: -8 });

    this.moves.add({ x: -1, y: -1 });
    this.moves.add({ x: -2, y: -2 });
    this.moves.add({ x: -3, y: -3 });
    this.moves.add({ x: -4, y: -4 });
    this.moves.add({ x: -5, y: -5 });
    this.moves.add({ x: -6, y: -6 });
    this.moves.add({ x: -7, y: -7 });
    this.moves.add({ x: -8, y: -8 });
  }

  //TODO: change the way moves are done
  addHorizontalMoves() {
    this.moves.add({ x: 1, y: 0 });
    this.moves.add({ x: 2, y: 0 });
    this.moves.add({ x: 3, y: 0 });
    this.moves.add({ x: 4, y: 0 });
    this.moves.add({ x: 5, y: 0 });
    this.moves.add({ x: 6, y: 0 });
    this.moves.add({ x: 7, y: 0 });
    this.moves.add({ x: 8, y: 0 });

    this.moves.add({ x: -1, y: 0 });
    this.moves.add({ x: -2, y: 0 });
    this.moves.add({ x: -3, y: 0 });
    this.moves.add({ x: -4, y: 0 });
    this.moves.add({ x: -5, y: 0 });
    this.moves.add({ x: -6, y: 0 });
    this.moves.add({ x: -7, y: 0 });
    this.moves.add({ x: -8, y: 0 });
  }

  //TODO: change the way moves are done
  addVerticalMoves() {
    this.moves.add({ x: 0, y: 1 });
    this.moves.add({ x: 0, y: 2 });
    this.moves.add({ x: 0, y: 3 });
    this.moves.add({ x: 0, y: 4 });
    this.moves.add({ x: 0, y: 5 });
    this.moves.add({ x: 0, y: 6 });
    this.moves.add({ x: 0, y: 7 });
    this.moves.add({ x: 0, y: 8 });

    this.moves.add({ x: 0, y: -1 });
    this.moves.add({ x: 0, y: -2 });
    this.moves.add({ x: 0, y: -3 });
    this.moves.add({ x: 0, y: -4 });
    this.moves.add({ x: 0, y: -5 });
    this.moves.add({ x: 0, y: -6 });
    this.moves.add({ x: 0, y: -7 });
    this.moves.add({ x: 0, y: -8 });
  }

  abstract getPicture(): string;
}

export default ChessPiece;
