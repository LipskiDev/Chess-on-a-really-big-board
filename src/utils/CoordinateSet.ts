import Coordinates from "./Coordinates";


class MoveSet {
    coordinateset: Coordinates[];
    constructor() {
        this.coordinateset = [];
    }

    add(coordinates: Coordinates): void {
        if (this.has(coordinates)) return;
        this.coordinateset.push(coordinates);
    }

    has(containsCoordinate: Coordinates): boolean {
        let contains = false;
        this.coordinateset.forEach(function (coordinate) {
            if (coordinate.equals(containsCoordinate)) {
                contains = true;
            }

        });
        return contains;
    }

    clear() {
        this.coordinateset = [];
    }

    forEach(f: ((x: Coordinates) => void)) {
        this.coordinateset.forEach(f);
    }
}

export default MoveSet