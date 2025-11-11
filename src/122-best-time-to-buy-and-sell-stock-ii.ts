/**
 * ### [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)
 *
 * You are given an integer array `prices` where `prices[i]` is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the
 * stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you
 * never hold more than one share of the stock.
 *
 * Find and return the maximum profit you can achieve.
 *
 * #### Constraints
 * - `1 <= prices.length <= 3 * 10^4`
 * `0 <= prices[i] <= 10^4`
 *
 * #### Reasoning
 *
 * The key insight that simplifies the problem is that because you can make unlimited transactions,
 * you don't need to worry about finding the absolute lowest price to buy and the absolute highest
 * price to sell over the entire period. Instead, you should simply capture every single price
 * increase you encounter.
 *
 * #### Complexity Analysis
 * - Time complexity: we iterate the prices array once, and do constant time operations at each
 * index - `O(N)`;
 * - Space complexity: an additional array `profit` of length N was created - `O(N)`.
 */
export function maxProfit(prices: number[]): number {
    const n = prices.length;
    const profit = new Array(n).fill(0);

    for (let day = 1; day < n; day++) {
        profit[day] =
            profit[day - 1] + Math.max(prices[day] - prices[day - 1], 0);
    }

    return profit[n - 1];
}

/**
 * Since to populate the `profit` array on a specific day depends only
 * on the profit of the previous day, the array can be transformed into
 * a single variable `maxProfit`, which transforms the space complexity
 * to `O(1)`.
 */
export function maxProfit_enhanced(prices: number[]): number {
    const n = prices.length;
    let maxProfit = 0;

    for (let day = 1; day < n; day++) {
        maxProfit = maxProfit + Math.max(prices[day] - prices[day - 1], 0);
    }

    return maxProfit;
}
