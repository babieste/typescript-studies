import { insertionSort } from "./insertion-sort";

describe("Insertion Sort", () => {
  test("for array [5, 2, 4, 6, 1, 3], it returns [1, 2, 3, 4, 5, 6]", () => {
    const a = [5, 2, 4, 6, 1, 3];
    insertionSort(a);
    expect(a).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
