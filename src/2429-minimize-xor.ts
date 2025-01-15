// 1. x has the same number of set bits as num2 => the same number of 1's
// 2. the value of the operation x XOR num1 is minimal
// when does the XOR operation is minimal?
// when we have both numbers with set bits in different places
// meaning when the numbers are the same

// how can we achieve that?
// given num1 = 1010, x needs to be 1010 to be globaly minimum.
// but we need to consider constraint 1, so at least the bits that
// are set in num1 need to be also set in x.

// example: num1 = 3 and num2 = 5
// binary representation: num1 = "11" and num2 = "101"
// num1 has two set bits at position 0 and 1
// num2 has two set bits at positions 0 and 2
// to the XOR be minimal, x need to have two set bits at position 0 and 1,
// such then x ^ 1 will be minimal
// that sufices because num2 also only needs two set bits, so both
// constraints are met.

/**
 * [2429. Minimize XOR](https://leetcode.com/problems/minimize-xor/?envType=daily-question&envId=2025-01-15)
 *
 * Given two positive integers `num1` and `num2`, find the positive integer `x` such that:
 * - `x` has the same number of set bits as `num2`, and
 * - The value `x XOR num1` is minimal.
 *
 * Note that XOR is the bitwise XOR operation.
 * Return the integer `x`. The test cases are generated such that `x` is uniquely determined.
 *
 * The number of set bits of an integer is the number of 1's in its binary representation.
 */
export function minimizeXor(num1: number, num2: number): number {
  let binaryNum1 = Number(num1).toString(2);
  let binaryNum2 = Number(num2).toString(2);

  // pad binary representation so both have same length
  if (binaryNum1.length > binaryNum2.length) {
    binaryNum2 = binaryNum2.padStart(binaryNum1.length, "0");
  } else if (binaryNum2.length > binaryNum1.length) {
    binaryNum1 = binaryNum1.padStart(binaryNum2.length, "0");
  }

  let binaryNum1Array = binaryNum1.split(""); // O(n)
  let binaryNum2Array = binaryNum2.split(""); // O(n)

  // lets assume x is equals to num1 so XOR operation is minimal.
  let x = binaryNum1Array;

  let num2SetBitsCount = 0;
  let xSetBitsCount = 0;

  // count the set bits
  for (let i = 0; i < binaryNum2Array.length; i++) {
    if (binaryNum2Array[i] === "1") {
      num2SetBitsCount++;
    }

    if (x[i] === "1") {
      xSetBitsCount++;
    }
  }

  if (num2SetBitsCount === xSetBitsCount) {
    return parseInt(x.join(""), 2);
  }

  let i = x.length - 1;

  // if the number of set bits is not the same, pad it
  if (num2SetBitsCount > xSetBitsCount) {
    while (i >= 0 && xSetBitsCount < num2SetBitsCount) {
      if (x[i] === "0") {
        x[i] = "1";
        xSetBitsCount++;
      }

      i--;
    }
  } else {
    while (i >= 0 && xSetBitsCount > num2SetBitsCount) {
      if (x[i] === "1") {
        x[i] = "0";
        xSetBitsCount--;
      }

      i--;
    }
  }

  return parseInt(x.join(""), 2);
}
