import { combinationSum } from "./39-combination-sum";

describe("39 - Combination Sum", () => {
  test("for candidates [2,3,6,7] and target 7, a possible solution is [[2,2,3], [7]]", () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const result = combinationSum(candidates, target);
    expect(result).toEqual([[2, 2, 3], [7]]);
  });

  test("for candidates [2,3,5] and target 8, a possible solution is [[2,2,2,2], [2,3,3], [3,5]]", () => {
    const candidates = [2, 3, 5];
    const target = 8;
    const result = combinationSum(candidates, target);
    expect(result).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  test("for candidates [2] and target 1, a possible solution is []", () => {
    const candidates = [2];
    const target = 1;
    const result = combinationSum(candidates, target);
    expect(result).toEqual([]);
  });
});
