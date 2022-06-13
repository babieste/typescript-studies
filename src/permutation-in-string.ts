/**
 * @see https://leetcode.com/problems/permutation-in-string/
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 * 
 * Constraints:
 * - 1 <= s1.length, s2.length <= 10^4
 * - s1 and s2 consist of lowercase English letters.
 */
function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false;
    }
    
    const s1Chars = s1.split('').sort();
    let i = 0;
    let j = s1.length;

    while (j <= s2.length) {
        const s2Chars = s2.substring(i, j).split('').sort();

        if (areEqual(s1Chars, s2Chars)) {
            return true;
        }

        i++;
        j++;
    }

    return false;
};

function areEqual(a: string[], b: string[]): boolean {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
           return false;
        }
    }
    
    return true;
}


export {}
