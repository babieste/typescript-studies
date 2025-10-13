/**
 * ### [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)
 *
 * Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n * m log m)`, where `n` is the number of strings and `m` is the maximum length of a string.
 * - Space Complexity: `O(n * m)` for storing the grouped anagrams in the hash map.
 */
export function groupAnagrams(strs: string[]): string[][] {
    const map: Record<string, string[]> = {};
    let i = 0;

    while (i < strs.length) {
        const hashValue = Array.from(strs[i]).sort().join("");
        map[hashValue] ??= [];
        map[hashValue].push(strs[i]);
        i++;
    }

    return Object.values(map);
}

/**
 * An optimized version of the `groupAnagrams` function that uses a frequency map to avoid sorting.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n * m)`, where `n` is the number of strings and `m` is the maximum length of a string.
 * - Space Complexity: `O(n * m)` for storing the grouped anagrams in the hash map.
 */
export function optimizedGroupAnagrams(strs: string[]): string[][] {
    const map: Record<string, string[]> = {};
    let i = 0;

    for (const str of strs) {
        const charCodeA = "a".charCodeAt(0);
        const count = new Array(26).fill(0);

        // Count frequency of each character.
        for (let j = 0; j < str.length; j++) {
            count[str.charCodeAt(j) - charCodeA]++;
        }

        const hashValue = count.join("0"); // Use '-' as a separator to avoid ambiguity.
        map[hashValue] ??= [];
        map[hashValue].push(str);
    }

    return Object.values(map);
}
