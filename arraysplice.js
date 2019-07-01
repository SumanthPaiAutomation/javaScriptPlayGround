var array = ['a', 'b', 'c', 'd', 'e'];
var indices = [1,3]
// array2 should contain ['a', 'c', 'e']
//var array = ['a', 'b', 'c', 'd', 'e'];
//var indices2 = [1]
// array2 should contain ['a', 'c', 'd', 'e']

    
    function arrayExcept(array, indices) {
        let output = [];
        if (indices.length == 1) {
            array.splice([indices], 1);
        }
        else {
            array.splice(indices[0],1);
            array.splice(2,1);
            for (var i = 0; i < indices.length; i++){
                array.splice((indices[i+1]), i);
            }
        }
        return array;
    }


console.log(arrayExcept(array,indices));