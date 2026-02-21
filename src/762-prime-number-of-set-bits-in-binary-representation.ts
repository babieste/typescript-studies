/**
 * ### [762. Prime Number of Set Bits in Binary Representation](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/)
 *
 * Given two integers `left` and `right`, return the count of numbers in the inclusive range `[left, right]`
 * having a prime number of set bits in their binary representation.
 *
 * Recall that the number of set bits an integer has is the number of 1's present when written in binary.
 *
 * For example, 21 written in binary is 10101, which has 3 set bits.
 */
function countPrimeSetBits(left: number, right: number): number {
    let numbersWithPrimeSetBits = 0;

    for (let i = left; i <= right; i++) {
        const binary = i.toString(2);

        if (isPrime(countOnes(binary))) {
            numbersWithPrimeSetBits++;
        }
    }

    return numbersWithPrimeSetBits;
}

function countOnes(binary: string): number {
    return Array.from(binary).reduce((quantity, char) => {
        if (char === "1") {
            return quantity + 1;
        }

        return quantity;
    }, 0);
}

function isPrime(n: number): boolean {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
