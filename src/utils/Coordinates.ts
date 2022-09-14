class Coordinates {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    equals(coordinates: Coordinates): boolean {
        return (this.x === coordinates.x && this.y === coordinates.y)
    }
}

export default Coordinates;