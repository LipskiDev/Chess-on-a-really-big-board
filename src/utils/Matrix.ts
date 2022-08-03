export interface Matrix<T> extends Omit<T[][], "forEach"> {
  readonly rows: number;
  readonly columns: number;

  row(row: number): T[] | undefined;
  column(column: number): T[] | undefined;

  forEach(fn: (value: T, row: number, column: number) => void): void;
}

export function createMatrix<T>(
  rows: number,
  columns: number,
  initialValue?: T
): Matrix<T> {
  const matrix = new Array<T[]>(rows);

  for (let row = 0; row < rows; row++) {
    matrix[row] = new Array<T>(columns);

    if (initialValue !== undefined) {
      for (let column = 0; column < columns; column++) {
        matrix[row][column] = initialValue;
      }
    }
  }

  Object.defineProperties(matrix, {
    rows: {
      get(): number {
        return this.length;
      },
    },
    columns: {
      get(): number {
        return this[0]?.length ?? 0;
      },
    },
    row: {
      value: function (row: number): T[] | undefined {
        return this[row];
      },
    },
    column: {
      value: function (column: number): T[] | undefined {
        if (column >= this.columns || column < 0) return undefined;
        return this.map((row) => row[column]);
      },
    },
    forEach: {
      value: function (
        fn: (value?: T, row?: number, column?: number) => void
      ): void {
        for (let row = 0; row < this.rows; row++) {
          for (let column = 0; column < this.columns; column++) {
            fn(this[row][column], row, column);
          }
        }
      },
    },
  } as PropertyDescriptorMap & ThisType<Matrix<T>>);

  return Object.create(matrix) as Matrix<T>;
}
