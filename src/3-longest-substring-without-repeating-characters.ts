/**
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - s consists of English letters, digits, symbols and spaces.
 * 
 * @link https://www.enjoyalgorithms.com/blog/longest-substring-without-repeating-characters
 */

// #region brute force
/**
 * Time and space complexity analysis:
 * 1) We are exploring all `n * (n + 1) / 2` substrings using nested loops.
 * 2) For each substring, function `isUnique` takes `O(j - i + 1)` time to check if the
 * substring `s[i, j]` is unique.
 * 3) Therefore, overall time complexity is `n(n+1)/2 * O(j-i+1)` = **O(n^3)**.
 * 4) We are using verifiedChars extra variable, which in worst case is **O(n)**.
 */
function lengthOfLongestSubstringBruteForce(s: string): number {    
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isUnique(s, i, j)) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    
    return maxLength;    
};

function isUnique(s: string, startIndex: number, endIndex: number): boolean {
    const verifiedChars: string[] = [];
    
    for (let charIndex = startIndex; charIndex <= endIndex; charIndex++) {
        if (verifiedChars.some(char => char === s[charIndex])) {
            return false;
        }
        
        verifiedChars.push(s[charIndex]);
    }
    
    return true;    
}
//#endregion brute force

//#region sliding window
/**
 * Time and space complexity analisys:
 * 1) We are using two nested loops and performing an `O(1)` operation at each interation
 * 2) The worst-case scenario will occur when all the characters in the string are unique.
 * In such situation, the nested loop wil explore all possible substrings (`n(n+1)/2`).
 * Therefore, time complexity is `n(n+1)/2 * O(1)` = **O(n^2)**.
 * 3) We are using verifiedChars extra variable, which in worst case is **O(n)**.
 */
function lengthOfLongestSubstringSlidingWindow(s: string): number {    
    let maxLength = 0;
    let i = 0;
    
    while (i < s.length) {
        const visitedChars = new Set<string>();
        let j = i;
        
        while (j < s.length && !visitedChars.has(s[j])) {
            maxLength = Math.max(maxLength, j - i + 1);
            visitedChars.add(s[j]);
            j++;
        }
        
        visitedChars.delete(s[i]);
        i++;
    }
    
    return maxLength;
};

//#endregion sliding window

//#region  optimized sliding window
/**
 * Can the efficienty of the sliding window approach be optimized?
 * 
 * At each iteration of the outer loop we ignore the previous window `[i, j)`
 * and reset `j = i` to start a new window. If characters in the window `[i, j)`
 * are unique, then characters in the window `[i+1, j)` are also unique. So in
 * the next iteration of the outer loop, there is no need to start a new window
 * of size 1 or reset `j = i`.
 * 
 * 
 * Time and space complexity analysis:
 * 1) At each iteration, we either increment pointer `i` or `j`, so the loop
 * will run `n` times and perform a constant number of operations. Therefore,
 * the time complexity is **O(n)**.
 * 2) We are using verifiedChars extra variable, which in worst case is **O(n)**.
 */
function lengthOfLongestSubstringOptimizedSlidingWindow(s: string): number {
    if (s.length === 0) {
        return 0;
    }
    
    const visitedChars = new Set<string>();
    let maxLength = 0;
    let i = 0;
    let j = 0;

    while (i < s.length && j < s.length) {
        if (!visitedChars.has(s[j])) {
            visitedChars.add(s[j]);
            j++;
            maxLength = Math.max(maxLength, j - i);
        } else {
            visitedChars.delete(s[i]);
            i++;
        }
    }

    return maxLength;
}
//#endregion optmized sliding window

export {}
