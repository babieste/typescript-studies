/**
 * ## [788. Rotated Digits](https://leetcode.com/problems/rotated-digits/description/)
 *
 * ### Description
 *
 * An integer `x` is a good if after rotating each digit individually by 180 degrees,
 * we get a valid number that is different from `x`. Each digit must be rotated - we
 * cannot choose to leave it alone.
 *
 * A number is valid if each digit remains a digit after rotation. For example:
 *
 * -0, 1, and 8 rotate to themselves,
 * 2 and 5 rotate to each other (in this case they are rotated in a different
 * direction, in other words, 2 or 5 gets mirrored),
 * - 6 and 9 rotate to each other, and
 * - the rest of the numbers do not rotate to any other number and become invalid.
 *
 * Given an integer `n`, return the number of good integers in the range `[1, n]`.
 *
 * #### Constraints
 *
 * - `1 <= n <= 10^4`
 *
 * ### Reasoning
 *
 * A good number should:
 * 1. Not contain prohibited numbers: 3, 4 and 7
 * 2. Not be made of only digits that don't change: 0, 1 and 8
 * 3. Have at least one digit that change: 2, 5, 6 and 9
 *
 * A number bigger than 9 is a combination of digits from 0 to 9.
 * The number's result is the result of it's components.
 *
 * Considering that numbers can be bad, neutral (rotate but doesn't change)
 * and good, we can build a map for the base cases, in which -1 is bad, 0
 * is neutral and 1 is good.
 *
 * ### Complexity Analysis
 *
 * #### Time Complexity
 *
 * We iterate through 1 to `n` once, making it `O(N)`.
 *
 * #### Space Complexity
 *
 * To obtain the result, we use an auxiliary array `dp` which
 * contais the status of each integer between 1 and `n`, making
 * it `O(N)`.
 *
 */
function rotatedDigits(n: number): number {
    // For each `i` (`0 <= i <= 9`), `dp[i]` is the status of the number
    const dp = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1]; // We start `dp` with the base cases.

    // Given the base cases, we can build the status for all numbers from 1 to `n`
    // by verifying it's components

    let goodNumbersCount = 0;

    for (let i = 1; i <= n; i++) {
        // If we know `num` status, verify it
        if (dp[i] != null) {
            goodNumbersCount += dp[i] === 1 ? 1 : 0;
        } else {
            // Decompose `num` in last digit and the rest
            const lastDigit = i % 10;
            const lastDigitStatus = dp[lastDigit];
            const initialDigits = Math.floor(i / 10);
            const initialDigitsStatus = dp[initialDigits];

            if (lastDigitStatus === -1 || initialDigitsStatus === -1) {
                // `num` contain bad digits, thus bad
                dp[i] = -1;
            } else if (lastDigitStatus === 1 || initialDigitsStatus === 1) {
                // `num` is valid, and it contain a good digit, thus good
                dp[i] = 1;
            } else {
                // `num` is neutral
                dp[i] = 0;
            }

            if (dp[i] === 1) {
                goodNumbersCount++;
            }
        }
    }

    return goodNumbersCount;
}
