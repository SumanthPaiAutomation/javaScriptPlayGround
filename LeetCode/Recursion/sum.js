// Write a recursive function that returns the sum of the digits of a number.

// 📥 Input: 1234
// 📤 Output: 1 + 2 + 3 + 4 = 10
function sumOfDigits(num){
    if(num==0) return 0
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
console.log(sumOfDigits(1234));