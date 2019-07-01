const city ='bangalore';
function revStr(a){
    var c=''
    for(var i = city.length-1;i>=0;i--){
        c=c+a[i];
    }
    return c;
}
console.log(revStr(city))