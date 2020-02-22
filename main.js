// 1.
const price = [12, 20, 50, 25, 41.95, 5.75, 32.99, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.50, 12]
const total = prices.reduce((currentAvg, price) => {
    return price.avg + currentAvg
}, 0)
console.log(total)