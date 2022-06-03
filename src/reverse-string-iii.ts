/**
 * @see https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * 
 * Given a string s, reverse the order of characters in each word within a sentence
 * while still preserving whitespace and initial word order.
 * 
 * Constraints:
 * - 1 <= s.length <= 5 * 10^4
 * - s contains printable ASCII characters
 * - s does not contain any leading or trailing spaces
 * - There is at least one word in s
 * - All the words in s are separated by a single space.
 */

function reverseWords(s: string): string {
    let words = s.split(' ');
    words = words.map((word) => reverse(word.split('')));
    return words.join(' ');
};

function reverse(s: string[]): string {
    let i = 0;
    let j = s.length - 1;
    
    while(i <= j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    
    return s.join('');
}

export {}
