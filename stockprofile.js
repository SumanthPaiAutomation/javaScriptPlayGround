var stockTicker = ['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44];
var portfolio = [['AAPL', 100], ['YHOO', 200]];

function totalPortfolioValue(stockTicker, portfolio) {
    let output = 0;
    for (var i = 0; i <= portfolio.length; i++){
        for (var j = 0; j <= stockTicker.length; j = j + 2){
            if (stockTicker[j] == portfolio[i][0]) {
                output = output + (stockTicker[j + 1] * portfolio[i][1]);
            } else {
                return 'not found';
            }
        }
    }
    return output;
}
console.log(totalPortfolioValue(stockTicker,portfolio));