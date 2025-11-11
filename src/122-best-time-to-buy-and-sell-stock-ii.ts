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
 * #### Complexity Analysis
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
