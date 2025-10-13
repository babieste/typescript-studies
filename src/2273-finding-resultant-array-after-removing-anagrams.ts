/**
 * ### [2273. Finding Resultant Array After Removing Anagrams](https://leetcode.com/problems/finding-resultant-array-after-removing-anagrams/)
 *
 * You are given a 0-indexed string array `words`, where `words[i]` consists of lowercase English letters.
 *
 * In one operation, select any index `i` such that `0 < i < words.length` and `words[i - 1]` and `words[i]`
 * are anagrams, and delete `words[i]` from `words`. Keep performing this operation as long as you can select
 * an index that satisfies the conditions.
 *
 * Return `words` after performing all operations. It can be shown that selecting the indices for each operation
 * in any arbitrary order will lead to the same result.
 *
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the
 * original letters exactly once. For example, "dacb" is an anagram of "abdc".
 *
 * Constraints:
 * - 1 <= words.length <= 100
 * - 1 <= words[i].length <= 10
 * - words[i] consists of lowercase English letters.
 *
 * #### Complexity Analysis
 *
 * - Time Complexity: Worst-case is `O(n^2 + n * m log m)`, where `n` is the number of words and `m` is the
 * maximum length of a word.
 *   - The `areAnagrams` check for each pair is `O(m log m)`.
 *   - The `splice` operation can take up to `O(n)` time for each removal, and in the worst case, up to `n`
 *   removals can occur, leading to an `O(n^2)` term.
 *   - Thus, the total is `O(n^2 + n * m log m)`.
 * - Space Complexity: `O(1)` as we are modifying the input array in place.
 */
export function removeAnagrams(words: string[]): string[] {
    // O(n)
    for (let i = 1; i < words.length; i++) {
        // O(m log m)
        if (areAnagrams(words[i - 1], words[i])) {
            // O(n)
            words.splice(i, 1);
            i--;
        }
    }

    return words;
}

/**
 * An optimized version of the `removeAnagrams` function that avoids the costly `splice` operation.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n * m)`, where `n` is the number of words and `m` is the maximum length of a word.
 *   - The `optimizedAreAnagrams` check for each pair is `O(m)`.
 *   - We only traverse the list once, leading to an overall time complexity of `O(n * m)`.
 * - Space Complexity: `O(n)` for storing the resultant array.
 */
export function optmizedRemoveAnagrams(words: string[]): string[] {
    const result = [words[0]];

    for (let i = 1; i < words.length; i++) {
        if (!optimizedAreAnagrams(words[i - 1], words[i])) {
            result.push(words[i]);
        }
    }

    return result;
}
/**
 * Helper function to determine if two strings are anagrams.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(m log m)`, where `m` is the length of the strings being compared.
 * - Space Complexity: `O(m)` for storing the sorted character arrays.
 */
// O(m) + O(m log m) + O(m log m) = O(m log m)
function areAnagrams(a: string, b: string): boolean {
    // O(1)
    if (a.length !== b.length) {
        return false;
    }

    // O(m log m)
    const aArray = Array.from(a.toLowerCase()).sort();
    // O(m log m)
    const bArray = Array.from(b.toLowerCase()).sort();

    // O(m)
    for (let i = 0; i < aArray.length; i++) {
        // O(1)
        if (aArray[i] !== bArray[i]) {
            return false;
        }
    }

    return true;
}

/**
 * An optimized helper function to determine if two strings are anagrams using a frequency map.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(m)`, where `m` is the length of the strings being compared.
 * - Space Complexity: `O(1)` since the frequency map will have at most 26 entries for lowercase English letters.
 */
function optimizedAreAnagrams(a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    }

    const frequencyMap = new Map<string, number>();

    for (let i = 0; i < a.length; i++) {
        frequencyMap.set(a[i], (frequencyMap.get(a[i]) ?? 0) + 1);
        frequencyMap.set(b[i], (frequencyMap.get(b[i]) ?? 0) - 1);
    }

    for (const count of frequencyMap.values()) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}
