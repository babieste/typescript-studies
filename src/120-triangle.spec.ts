import { minimumTotal } from "./120-triangle";

describe("120. Triangle", () => {
  test.each([
    [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], 11],
    [[[-10]], -10],
    [[[-1], [-2, -3]], -4],
  ])(
    'The minimum path sum of triangle "%s" is %d.',
    (triangle: number[][], expected: number) => {
      expect(minimumTotal(triangle)).toBe(expected);
    }
  );
});
