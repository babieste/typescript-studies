/**
 * ### [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/description/)
 *
 * You are given two strings `word1` and `word2`. Merge the strings by
 * adding letters in alternating order, starting with `word1`. If a
 * string is longer than the other, append the additional letters onto
 * the end of the merged string.
 *
 * Return the merged string.
 */
function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let j = 0;
  let mergedString = "";

  while (i < word1.length && j < word2.length) {
    mergedString += word1[i++];
    mergedString += word2[j++];
  }

  while (i < word1.length) {
    mergedString += word1[i++];
  }

  while (j < word2.length) {
    mergedString += word2[j++];
  }

  return mergedString;
}
