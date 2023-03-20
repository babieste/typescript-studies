/**
 * Description: @see https://leetcode.com/problems/can-place-flowers/description/
 *
 * Submission: @see https://leetcode.com/problems/can-place-flowers/submissions/918412242/
 *
 * You have a long `flowerbed` in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots. Given an integer array `flowerbed`
 * containing 0's and 1's, where `0` means empty and `1` means not empty, and an integer `n`,
 * return if `n` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
 *
 * Constraints:
 * - `1 <= flowerbed.length <= 2 * 10^4`
 * - `flowerbed[i]` is `0` or `1`.
 * - There are no two adjacent flowers in flowerbed.
 * - `0 <= n <= flowerbed.length`
 *
 * Complexity Analysis:
 * - Time complexity: `O(n)`, since we iterate over the flowerbed array once.
 * - Space complexity: `O(1)`, constant extra space is used.
 */
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (flowerbed.length === 0) {
    return false;
  }

  let numberOfAllowedPlots = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const isLeftPlotEmpty = i === 0 || flowerbed[i - 1] === 0;
      const isRightPlotEmpty =
        i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (isLeftPlotEmpty && isRightPlotEmpty) {
        flowerbed[i] = 1;
        numberOfAllowedPlots++;

        if (numberOfAllowedPlots >= n) {
          return true;
        }
      }
    }
  }

  return numberOfAllowedPlots >= n;
}
