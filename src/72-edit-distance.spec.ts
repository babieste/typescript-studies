import { minDistance } from "./72-edit-distance";

describe("72 - Edit Distance", () => {
  test.each([
    ["horse", "ros", 3],
    ["intention", "execution", 5],
  ])(
    'Minimum edit distance of "%s" to "%s" is %d steps',
    (word1, word2, expected) => {
      expect(minDistance(word1, word2)).toBe(expected);
    }
  );
});
