/**
 * ### [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
 *
 * #### Constraints
 * - `1 <= s.length <= 2 * 10^5`
 * - `s` consists only of printable ASCII characters.
 *
 * ### Complexity Analysis
 * - Time Complexity: `O(n)` because we iterate the input string twice, first
 * to sanitize it and then to verify if it's a palindrome.
 * - Space Complexity: `O(n)` because we are saving the sanitized string in
 * an auxiliary variable `sanitized`. In the worst case scenario the
 * string is already "sanitized", thus all `n` characters will be copied
 * onto `sanitized`.
 */
function isPalindrome(s: string): boolean {
    const sanitized: string[] = [];
    const numbersAsciiInterval = {
        min: 48,
        max: 57,
    };
    const lettersAsciiInterval = {
        min: 97,
        max: 122,
    };

    s = s.toLowerCase();

    for (const char of s) {
        const charCode = char.charCodeAt(0);

        if (
            (charCode >= numbersAsciiInterval.min &&
                charCode <= numbersAsciiInterval.max) ||
            (charCode >= lettersAsciiInterval.min &&
                charCode <= lettersAsciiInterval.max)
        ) {
            sanitized.push(char);
        }
    }

    for (let i = sanitized.length - 1, j = 0; i > j; i--, j++) {
        if (sanitized[i] !== sanitized[j]) {
            return false;
        }
    }

    return true;
}
