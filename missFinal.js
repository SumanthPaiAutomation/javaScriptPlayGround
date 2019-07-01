let arrex=[19,17,18,15]

function missingElemnt(arrayOfNumbers){
    let lengthArray= arrayOfNumbers.length;
    let total = (lengthArray+1)*(lengthArray*2)/2;
    for(var i=0;i<lengthArray;i++){
        total = total -arrayOfNumbers[i];
    }
    return total;
}

console.log(missingElemnt(arrex))