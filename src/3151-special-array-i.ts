/**
 * [3151. Special Array I](https://leetcode.com/problems/special-array-i/)
 *
 * An array is considered special if every pair of its adjacent elements
 * contains two numbers with different parity. You are given an array of
 * integers `nums`. Return `true` if `nums` is a special array, otherwise,
 * return `false`.
 */
export function isArraySpecial(nums: number[]): boolean {
  return isArraySpecialWithModuloComparison(nums);
}

function isArraySpecialWithModuloComparison(nums: number[]): boolean {
  function isEven(num: number): boolean {
    return num % 2 === 0;
  }

  if (nums.length <= 1) {
    return true;
  }

  for (let i = 1; i < nums.length; i++) {
    if (isEven(nums[i]) === isEven(nums[i - 1])) {
      return false;
    }
  }

  return true;
}

/**
 *  When we look at the binary form of a number, the last digit tells us its parity:
 * - If the last digit is `0`, the number is even (for example, `6` in binary is `110` → `6` is even).
 * - If the last digit is `1`, the number is odd (for example, `7` in binary is `111` → `7` is odd).
 *
 * The bitwise AND (`&`) operation returns `1` only if the two bits compared are `1`. Using this, we can
 * check a number's last bit to determine its parity: an odd number AND `1` yields '1', while an even
 * number AND `1` yields.
 *
 * The bitwise XOR (`^`) is ideal for this purpose, as it returns a `1` if two numbers have alternating
 * parities and a `0` if they have matching parities.
 */
function isArraySpecialWithBitwiseOperation(nums: number[]): boolean {
  if (nums.length <= 1) {
    return true;
  }

  for (let i = 1; i < nums.length; i++) {
    if (((nums[i] & 1) ^ (nums[i - 1] & 1)) === 0) {
      return false;
    }
  }

  return true;
}
