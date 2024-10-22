/**
    The Pascal's triangle, is a form of representation of the binomal coefficients. Considering a matrix representation like:
    [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [1, 2, 1, 0],
        [1, 3, 3, 1]
    ]

    This algorithm uses dynamic programming to create a Pascal's triangle,
    by first generating a matrix `bc` of `numRows x numRows` size and
    placing the base cases. Then it uses the fact that for each row `i` and
    column `j`, a value positioned at `bc[i][j]` is calculated by adding
    `b[i - 1][j]` and `b[i - 1][j - 1]`.
 */
function generate(numRows: number): number[][] {
  const bc: number[][] = Array.from({ length: numRows }, (it) => []);

  for (let i = 0; i < numRows; i++) {
    bc[i][0] = 1;
    bc[i][i] = 1;
  }

  for (let i = 1; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      bc[i][j] = bc[i - 1][j] + bc[i - 1][j - 1];
    }
  }

  return bc;
}
