let str = 'hello world';
let output =  str.split(' ')
console.log(output.length)
let strarr=[]
let res1=''
let hasher ='#'
let res2 = ''
res1= output[0].charAt(0).toUpperCase()+output[0].slice(1).toLowerCase();
res2=hasher+res1;
for(var i=1;i<=output.length;i++){
    let res3= output[i].charAt(0).toUpperCase()+output[i].slice(1).toLowerCase();
    res3=res2+res3;
    output.push(res3)
}

console.log(output)
