const values =[0,NaN,null,undefined,1,'','pai',[],{}];
function truthyFalsy(arr){
    let truthy=[];
    let falsey=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
                truthy.push(arr[i]);
                
        }else{
            falsey.push(arr[i])
        }
    }
    return [truthy,falsey];
}

console.log(truthyFalsy(values));