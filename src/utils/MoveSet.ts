import Move from "../gamelogic/Move";
import Coordinates from "./Coordinates";

class MoveSet {
    moveset: Move[];
    constructor() {
        this.moveset = [];
    }

    add(move: Move): void {
        if (this.has(move)) return;
        this.moveset.push(move);
    }

    has(containsMove: Move): boolean {
        let contains = false;
        this.moveset.forEach(function (move) {
            if (move.destination.equals(containsMove.destination)
                && move.moveType === containsMove.moveType
                && move.origin.equals(containsMove.origin)
                && move.path === containsMove.path) {
                contains = true;
            }

        });
        return contains;
    }

    containsDestination(containsDestination: Coordinates): boolean {
        let contains = false;
        this.moveset.forEach(function (move) {
            if (move.destination.equals(containsDestination)) {
                contains = true;
            }

        });
        return contains;
    }

    clear() {
        this.moveset = [];
    }

    forEach(f: ((x: Move) => void)) {
        this.moveset.forEach(f);
    }
}

export default MoveSet