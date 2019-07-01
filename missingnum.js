//let arrays=[1,5,3,2]
let arrays2=[19,18,17,15];
let arrays3=[21,23,22,25];

function missingElement(arrayNumber){
let output =[];
let manage=[];
let res=0;
let inter = arrayNumber.sort(function(a,b){return a-b});
let startFrom = inter[0];
console.log(startFrom);
console.log(inter);
for(var i=1;i<=4;i++){
    startFrom+=1;
    output.push(startFrom);
}
console.log(output);
for (let j=0; j<=4;j++){
    if(output[j]===arrayNumber[j]){
        manage.push(output[j]);
    }else{
        res = output[j];
    }

return res;
}

}
console.log(missingElement(arrays3));
//console.log(missingElement(arrays2));