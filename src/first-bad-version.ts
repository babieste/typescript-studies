/**
 * @see https://leetcode.com/problems/first-bad-version/
 * 
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check. Since
 * each version is developed based on the previous version, all the versions after
 * a bad version are also bad.
 * 
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad
 * one, which causes all the following ones to be bad.
 * 
 * You are given an API bool isBadVersion(version) which returns whether version is
 * bad. Implement a function to find the first bad version. You should minimize the
 * number of calls to the API.
 * 
 * Constraints
 * - 1 <= bad <= n <= 2^31 - 1
 * 
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 let solution = (isBadVersion: any) => {
    return (n: number): number => {
        let left = 1;
        let right = n - 1;
        
        while (left <= right) {
            const pivot = left + Math.floor((right - left)/2);
            console.log('pivot:', pivot);
            
            // If pivot contains a bad version, it becomes the upper bound for verification
            if (isBadVersion(pivot)) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        }
        
        return left;
    };
};

export {}
