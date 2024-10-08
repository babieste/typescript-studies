function checkValidGrid(grid: number[][]): boolean {
  if (grid[0][0] !== 0) {
    return false;
  }

  return backtrack(grid, 0, 0, 0);
}

function isKnightPositionValid(
  grid: number[][],
  row: number,
  col: number,
  expectedValue: number
): boolean {
  const N = grid.length;

  // If out of bounds, invalid
  if (row < 0 || row >= N || col < 0 || col >= N) {
    return false;
  }

  // If expected value in configuration, valid
  return grid[row][col] === expectedValue;
}

function backtrack(
  grid: number[][],
  row: number,
  col: number,
  currentValue: number
): boolean {
  const N = grid.length;

  if (currentValue === N * N - 1) {
    return true;
  }

  const possiblePositions = [
    [row - 2, col - 1],
    [row - 1, col - 2],
    [row + 1, col - 2],
    [row + 2, col - 1],
    [row - 2, col + 1],
    [row - 1, col + 2],
    [row + 1, col + 2],
    [row + 2, col + 1],
  ];
  let isValid = true;

  for (let i = 0; i < possiblePositions.length; i++) {
    const possibleRow = possiblePositions[i][0];
    const possibleCol = possiblePositions[i][1];

    if (
      isKnightPositionValid(grid, possibleRow, possibleCol, currentValue + 1)
    ) {
      return backtrack(grid, possibleRow, possibleCol, currentValue + 1);
    } else {
      isValid = false;
    }
  }

  return isValid;
}
