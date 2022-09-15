import Move from "../gamelogic/Move";
import Coordinates from "./Coordinates";

export default class MoveSet {
  public moveset: Move[];

  constructor() {
    this.moveset = [];
  }

  public static equals(move1: Move, move2: Move): boolean {
    return (
      move1.destination.equals(move2.destination) &&
      move1.moveType === move2.moveType &&
      move1.origin.equals(move2.origin) &&
      move1.path === move2.path
    );
  }

  public add(move: Move): void {
    if (this.has(move)) return;

    this.moveset.push(move);
  }

  public has(move: Move): boolean {
    for (const existingMove of this.moveset) {
      if (MoveSet.equals(existingMove, move)) {
        return true;
      }
    }

    return false;
  }

  public containsDestination(destination: Coordinates): boolean {
    for (const move of this.moveset) {
      if (move.destination.equals(destination)) {
        return true;
      }
    }

    return false;
  }

  public clear(): void {
    this.moveset = [];
  }

  public forEach(fn: (move: Move) => void): void {
    this.moveset.forEach(fn);
  }
}
