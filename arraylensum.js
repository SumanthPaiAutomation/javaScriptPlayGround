let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13,14,15];

    function sumTwoArrayIndexes(a, b) {
        let output = [];
        let sum = 0;
        let inter = [];
        let res =[];
        if (b.length > a.length) {
            inter = b.splice(a.length);
            for (var i = 0; i < a.length; i++){
                sum = b[i] + a[i];
                output.push(sum);
            }
            res = output.concat(inter);
        } else
        {
            inter = a.splice(b.length);
            for (var j = 0; j < b.length; j++){
                sum = a[j] + b[j];
                output.push(sum);
            }
            res = output.concat(inter);
        }
        return res;
    }
    

console.log(sumTwoArrayIndexes(array1,array2));

