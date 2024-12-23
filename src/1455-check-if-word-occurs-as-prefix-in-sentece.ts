/**
 * [1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/)
 * 
 * Given a `sentence` that consists of some words separated by a single space, and a `searchWord`,
 * check if `searchWord` is a prefix of any word in `sentence`. Return **the index of the word** in
 * `sentence` (1-indexed) where `searchWord` is a prefix of this word. If `searchWord` is a prefix of
 * more than one word, return the index of the first word (minimum index). If there is no such
 * word return -1.
 * 
 * A prefix of a string s is any leading contiguous substring of s.
 */
export function isPrefixOfWordBruteForce(sentence: string, searchWord: string): number {
    if (sentence.length === 1 && searchWord.length === 1) {
        if (sentence === " ") {
            return -1;
        }

        return sentence[0] === searchWord[0] ? 0 : -1;
    }

    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let j = 0;
        let k = 0;

        while (j < word.length && k < searchWord.length && word[j] === searchWord[k]) {
            j++;
            k++;
        }

        if (k === searchWord.length) {
            return i + 1;
        }
    }

    return -1;
};

export function isPrefixOfWordTwoPointers(sentence: string, searchWord: string): number {
    let wordIndex = 0;
    let i = 0;

    while (i < sentence.length) {
        // Skip leading whitespace
        while (i < sentence.length && sentence[i] === ' ') {
            i++;
        }

        wordIndex++;

        if (sentence[i] === searchWord[0]) {
            let matchCount = 0;

            while (
                i < sentence.length &&
                matchCount <= searchWord.length &&
                sentence[i] === searchWord[matchCount]
            ) {
                i++;
                matchCount++;
            }

            if (matchCount === searchWord.length) {
                return wordIndex;
            }
        }

        // Skip the rest of the word
        while (i < sentence.length && sentence[i] !== ' ') {
            i++;
        }
    }

    return -1;
};

export function isPrefixOfWordBuiltIn(sentence: string, searchWord: string): number {
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }

    return -1;
}; 