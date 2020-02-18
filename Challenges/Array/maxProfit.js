// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note: you cannot sell a stock before you buy one.
// Input: [7,1,5,3,6,4]
// Output: 5

// Brute Force (slower)
// Time: O(n^2) Space: O(1)
function maxProfit(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};

// 1 pass
// Time: O(n) Space: O(1)
function maxProfitFast(prices) {
    let minProfit = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minProfit) {
            minProfit = prices[i];
        } else if (prices[i] - minProfit > maxProfit) {
            maxProfit = prices[i] - minProfit;
        }
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));