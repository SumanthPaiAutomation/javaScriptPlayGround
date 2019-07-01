let arr2 = [[1,2],[3,4],[4,5],[6,7],[7,8]];// 4 and 7 repeated elements 
let res ;
let output = [];
let inter=[];
for(var i=0;i<arr2.length;i++){
for( var j=0 ; j<arr2[i].length;j++){
    for(var k=1;k<arr2[i].length;k++){
        if(arr2[i][k]===arr2[i][j]){
            res = arr2[i][k];
            output.push(res);
        }
    }
   
}
}
console.log(output);
//console.log(arr2[1][2]);
//console.log(arr2[2][1]);
//if(arr2[1][2]==arr2[2][1]){
 //    console.log('duplicate');
//}
