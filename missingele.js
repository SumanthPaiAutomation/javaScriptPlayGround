let num1=[4,6,9,12,7];
let num2=[4,6,12,7];

function missing(arrOne,arrTwo){
    let result = 0;
let sumOne=0;
let sumTwo=0;
for(var i=0;i<arrOne.length;i++ ){
    sumOne+=arrOne[i];
}
for(var j=0;j<arrTwo.length;i++ ){
    sumTwo+=arrTwo[i];
}

return result = Math.abs(sumOne-sumTwo);
}

console.log(missing(num1,num2));