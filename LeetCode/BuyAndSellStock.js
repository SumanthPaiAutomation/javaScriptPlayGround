// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// var maxProfit = function(prices) {
//     let minPurchaseDate = Math.min(...prices)
//     let startIndex=prices.indexOf(minPurchaseDate)
//     let maxProfit=0
//     let diff=0
//     //what if min is on last day [2,4,1]
//     if(startIndex==prices.length){
//         prices=prices.splice(-1)
//         maxProfit(prices)
//     }
//     for(let i=startIndex;i<prices.length;i++){
//         for(let j=i+1;j<prices.length;j++){
//             diff= prices[j]-prices[i]
//             maxProfit=Math.max(diff,maxProfit)
//         }
//     }
//     return maxProfit
// };
let pricesList = [7,1,5,3,6,4]
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};