import Move, { MoveType } from "./Move";

class MoveGenerator {
  //generates all possible diagonal moves
  public static generateDiagonalMoves(
    startX: number,
    startY: number,
    range: number
  ): Set<Move> {
    let diagonalMoves = new Set<Move>();
    let pathMoves: { x: number; y: number }[];
    pathMoves = [];

    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        pathMoves = [];
        for (let it = 1; it <= range; it++) {
          diagonalMoves.add(
            new Move({ x: startX + it * x, y: startY + it * y }, pathMoves, [
              MoveType.normal,
            ])
          );
          pathMoves = pathMoves.concat({
            x: startX + it * x,
            y: startY + it * y,
          });
        }
      }
    }

    return diagonalMoves;
  }

  //generates all possible horizontal moves
  public static generateHorizontalMoves(
    startX: number,
    startY: number,
    range: number
  ): Set<Move> {
    let horizontalMoves = new Set<Move>();
    let pathMoves: { x: number; y: number }[];
    pathMoves = [];

    for (let x = -1; x <= 1; x += 2) {
      pathMoves = [];
      for (let it = 1; it <= range; it++) {
        horizontalMoves.add(
          new Move({ x: startX + it * x, y: startY }, pathMoves, [
            MoveType.normal,
          ])
        );
        pathMoves = pathMoves.concat({
          x: startX + it * x,
          y: startY,
        });
      }
    }

    return horizontalMoves;
  }

  //generates all possible vertical moves
  public static generateVerticalMoves(
    startX: number,
    startY: number,
    range: number
  ): Set<Move> {
    let verticalMoves = new Set<Move>();
    let pathMoves: { x: number; y: number }[];
    pathMoves = [];

    for (let y = -1; y <= 1; y += 2) {
      pathMoves = [];
      for (let it = 1; it <= range; it++) {
        verticalMoves.add(
          new Move({ x: startX, y: startY + it * y }, pathMoves, [
            MoveType.normal,
          ])
        );
        pathMoves = pathMoves.concat({
          x: startX,
          y: startY + it * y,
        });
      }
    }

    return verticalMoves;
  }

  //generates all possible custom offset moves (e.g. knight)
  public static generateCustomOffsetMoves(
    startX: number,
    startY: number,
    xOffset: number,
    yOffset: number
  ): Set<Move> {
    let offsetMoves = new Set<Move>();

    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        offsetMoves.add(
          new Move(
            { x: startX + xOffset * x, y: startY + yOffset * y },
            [],
            [MoveType.normal]
          )
        );

        offsetMoves.add(
          new Move(
            { x: startX + yOffset * x, y: startY + xOffset * y },
            [],
            [MoveType.normal]
          )
        );
      }
    }

    return offsetMoves;
  }

  //generates all moves the pawn can make
  public static generatePawnMoves(
    startX: number,
    startY: number,
    direction: number,
    boardHeight: number
  ): Set<Move> {
    let pawnMoves = new Set<Move>();
    let range = boardHeight / 2 - 2;
    let pathMoves: { x: number; y: number }[];
    pathMoves = [];

    //generates all vertical moves a pawn can take
    for (let i = 1; i <= range; i++) {
      pawnMoves.add(
        new Move(
          { x: startX + 0, y: startY + i * direction },
          pathMoves,
          i === 1 ? [MoveType.noTake] : [MoveType.start, MoveType.noTake]
        )
      );

      pathMoves = pathMoves.concat({
        x: startX + 0,
        y: startY + i * direction,
      });
    }

    //generates both diagonal moves which a pawn can only take with
    pawnMoves.add(
      new Move(
        { x: startX + 1, y: startY + 1 * direction },
        [],
        [MoveType.take]
      )
    );
    pawnMoves.add(
      new Move(
        { x: startX - 1, y: startY + 1 * direction },
        [],
        [MoveType.take]
      )
    );

    return pawnMoves;
  }
}
export default MoveGenerator;
