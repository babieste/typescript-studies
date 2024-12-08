export function maxProfit(prices: number[]): number {
  const dp: Array<Array<number | null>> = Array.from(
    { length: prices.length + 1 },
    () => Array(prices.length + 1).fill(null)
  );
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, profitForBuyingStockAtDay(i, prices, dp));
  }

  return maxProfit;
}

function profitForBuyingStockAtDay(
  i: number,
  prices: number[],
  dp: (number | null)[][]
): number {
  if (i >= prices.length) {
    return 0;
  }

  let maxProfit = 0;

  for (let j = i + 1; j < prices.length; j++) {
    let currentProfit = prices[j] - prices[i];
    console.log(
      `${"\t".repeat(i)}Buying a stock at day ${i}, for ${
        prices[i]
      }, and selling it at day ${j}, for ${
        prices[j]
      }, would give me a profit of ${currentProfit}`
    );

    // if (dp[i][j] !== null) {
    //     maxProfit = Math.max(maxProfit, dp[i][j]);
    // } else
    {
      dp[i][j] = currentProfit + profitForBuyingStockAtDay(j + 2, prices, dp);
      maxProfit = Math.max(maxProfit, dp[i][j] ?? 0);
    }
  }

  console.log(
    `${"\t".repeat(
      i
    )}At the end, by buying a stock at day ${i}, would give me a total profit of ${maxProfit}`
  );
  return maxProfit;
}
