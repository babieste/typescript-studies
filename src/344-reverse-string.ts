/**
 * @see https://leetcode.com/problems/reverse-string/
 * 
 * Write a function that reverses a string. The input string is given
 * as an array of characters s.
 * 
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s[i] is a printable ascii character
 */

function reverseString(s: string[]): void {
    let i = 0;
    let j = s.length - 1;
    
    while (i <= j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
};

export {}
