import Coordinates from "../utils/Coordinates";
import MoveSet from "../utils/MoveSet";
import Move, { MoveType } from "./Move";

class MoveGenerator {

  //generates all possible diagonal moves
  public static generateDiagonalMoves(
    coordinates: Coordinates,
    range: number
  ): MoveSet {
    let diagonalMoves = new MoveSet;
    let pathMoves: Coordinates[];
    pathMoves = [];

    let startX = coordinates.x;
    let startY = coordinates.y;

    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        pathMoves = [];
        for (let it = 1; it <= range; it++) {
          diagonalMoves.add(
            new Move(new Coordinates(startX, startY), new Coordinates(startX + it * x, startY + it * y), pathMoves, [
              MoveType.normal,
            ])
          );

          pathMoves = pathMoves.concat(
            new Coordinates(startX + it * x, startY + it * y)
          );
        }
      }
    }

    return diagonalMoves;
  }

  //generates all possible horizontal moves
  public static generateHorizontalMoves(
    coordinates: Coordinates,
    range: number
  ): MoveSet {
    let horizontalMoves = new MoveSet;
    let pathMoves: Coordinates[];
    pathMoves = [];

    let startX = coordinates.x;
    let startY = coordinates.y;

    for (let x = -1; x <= 1; x += 2) {
      pathMoves = [];
      for (let it = 1; it <= range; it++) {
        horizontalMoves.add(
          new Move(new Coordinates(startX, startY), new Coordinates(startX + it * x, startY), pathMoves, [
            MoveType.normal,
          ])
        );
        pathMoves = pathMoves.concat(
          new Coordinates(startX + it * x, startY)
        );
      }
    }

    return horizontalMoves;
  }

  //generates all possible vertical moves
  public static generateVerticalMoves(
    coordinates: Coordinates,
    range: number
  ): MoveSet {
    let verticalMoves = new MoveSet;
    let pathMoves: Coordinates[];
    pathMoves = [];

    let startX = coordinates.x;
    let startY = coordinates.y;

    for (let y = -1; y <= 1; y += 2) {
      pathMoves = [];
      for (let it = 1; it <= range; it++) {
        verticalMoves.add(
          new Move(new Coordinates(startX, startY), new Coordinates(startX, startY + it * y), pathMoves, [
            MoveType.normal,
          ])
        );
        pathMoves = pathMoves.concat(
          new Coordinates(startX, startY + it * y)
        );
      }
    }

    return verticalMoves;
  }

  //generates all possible custom offset moves (e.g. knight)
  public static generateCustomOffsetMoves(
    coordinates: Coordinates,
    xOffset: number,
    yOffset: number
  ): MoveSet {
    let offsetMoves = new MoveSet;

    let startX = coordinates.x;
    let startY = coordinates.y;

    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        offsetMoves.add(
          new Move(
            new Coordinates(startX, startY),
            new Coordinates(startX + xOffset * x, startY + yOffset * y),
            [],
            [MoveType.normal]
          )
        );

        offsetMoves.add(
          new Move(
            new Coordinates(startX, startY),
            new Coordinates(startX + yOffset * x, startY + xOffset * y),
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
    coordinates: Coordinates,
    direction: number,
    boardHeight: number
  ): MoveSet {
    let pawnMoves = new MoveSet;
    let range = boardHeight / 2 - 2;
    let pathMoves: Coordinates[];
    let startX = coordinates.x;
    let startY = coordinates.y;
    pathMoves = [];

    //generates all vertical moves a pawn can take
    for (let i = 1; i <= range; i++) {
      pawnMoves.add(
        new Move(
          new Coordinates(startX, startY),
          new Coordinates(startX, startY + i * direction),
          pathMoves,
          i === 1 ? [MoveType.noTake] : [MoveType.start, MoveType.noTake]
        )
      );

      pathMoves = pathMoves.concat(
        new Coordinates(startX, startY + i * direction),
      );
    }

    //generates both diagonal moves which a pawn can only take with
    pawnMoves.add(
      new Move(
        new Coordinates(startX, startY),
        new Coordinates(startX + 1, startY + 1 * direction),
        [],
        [MoveType.take]
      )
    );
    pawnMoves.add(
      new Move(
        new Coordinates(startX, startY),
        new Coordinates(startX - 1, startY + 1 * direction),
        [],
        [MoveType.take]
      )
    );

    return pawnMoves;
  }

  static generateKingsCastleMoves(
    coordinates: Coordinates,
    width: number
  ): MoveSet {
    let castleMoves = new MoveSet;
    let pathMoves: Coordinates[] = [];

    let startX = coordinates.x;
    let startY = coordinates.y;

    for (let i = 1; i <= width / 2 - 1; i++) {
      pathMoves = pathMoves.concat(new Coordinates(startX + i, startY))
    }
    castleMoves.add(new Move(
      new Coordinates(startX, startY),
      new Coordinates(startX + (width / 2 - 2), startY),
      pathMoves,
      [MoveType.castles, MoveType.start]
    ));

    console.log(pathMoves);

    pathMoves = [];

    for (let i = 1; i <= width / 2 - 2; i++) {
      pathMoves = pathMoves.concat(new Coordinates(startX - i, startY))
    }
    console.log(pathMoves);

    castleMoves.add(new Move(
      new Coordinates(startX, startY),
      new Coordinates(startX - (width / 2 - 2), startY),
      pathMoves,
      [MoveType.castles, MoveType.start]
    ));

    return castleMoves;


  }
}
export default MoveGenerator;
