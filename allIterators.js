let numbers=[1,2,3,4,5];
let output=[];
numbers.forEach(function(n){
    output.push(n*2) ;
})
console.log(output);

let resNew=[];
resNew=numbers.map(function(n){
    return n*5;
})
console.log(resNew);

let resTwo=[];
let resThree=[];
 let resFour;
let resFive;

resTwo= numbers.find(function(n){
    return n>3;
})

resThree = numbers.filter(function(n){
    return n>2;
})

resFour = numbers.every(function(n){
    return (n>0);

})

resFive =  numbers.some(function(n){
    return n>2;
})


