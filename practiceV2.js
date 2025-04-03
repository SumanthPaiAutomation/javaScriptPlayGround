function sumArray() {
    let sumArray=[1,2,3,4,5]
    let sum=0
    for(let eachNumber of sumArray){
        sum+=eachNumber
    }
    console.log(sum)
  }

  sumArray()

  function findMax(numbers) {
    // Your code here
    let maxNumber = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    console.log(maxNumber)
    // another method
    console.log(Math.max(...numbers))
    //another method
    let sortedArray= numbers.sort((a, b) => b - a);
    console.log(sortedArray[0])
  }

  findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  function filterEvenNumbers(numbers) {
    // Your code here
    let evenNumbers= numbers.filter((eachNumber)=>{
        return eachNumber%2===0
    })
  }

  function reverseArray(arr) {
    // Your code here
    console.log(arr.reverse())
    // another method
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }   
  }

  function removeDuplicates(arr) {
    // Your code here
    let uniqueArray = [...new Set(arr)];
    console.log(uniqueArray)
    // another method
    let uniqueArrayTwo = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log(uniqueArrayTwo)                                 
    // another method
    let uniqueArrayThree = arr.reduce((acc, current) => {
        if (!acc.includes(current)) {
            acc.push(current);
        }
        return acc;
    }, []);
    console.log(uniqueArrayThree)
    // another method
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    console.log(arr)
    let uniqueMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        uniqueMap.set(arr[i], true);
    }
    let anotherMap= new Map();
    for(let eachNumber of arr){
        if(eachNumber>1){
            anotherMap.set(eachNumber, anotherMap.get(eachNumber) || 0 + 1)
        }
    }
    let newArray=[]
    for(let eachValue in anotherMap.values()){
        if(anotherMap.get(eachValue)==1){
            newArray.push(eachValue)
        }
    }
    console.log(newArray)
  }

  function findInterSection(numbersOne,numbersTwo){
    // Your code here
    let intersectionArray = numbersOne.filter((eachNumber)=>{
        return numbersTwo.includes(eachNumber)
    })
    console.log(intersectionArray)
  }

  function chunkArray(arr, chunkSize) {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));

function rotateArray(arr, k, direction) {
    let n = arr.length;
    k = k % n;  // Handle cases where k > n

    for (let i = 0; i < k; i++) {
        if (direction === "right") {
            // Right Rotation
            let temp = arr[n - 1];  // Store the last element
            for (let j = n - 1; j > 0; j--) {
                arr[j] = arr[j - 1];  // Shift to the right
            }
            arr[0] = temp;  // Move the last element to the front
        } else if (direction === "left") {
            // Left Rotation
            let temp = arr[0];  // Store the first element
            for (let j = 0; j < n - 1; j++) {
                arr[j] = arr[j + 1];  // Shift to the left
            }
            arr[n - 1] = temp;  // Move the first element to the end
        }
    }

    return arr;
}

// 📝 Testing Right Rotation
console.log(rotateArray([1, 2, 3, 4, 5], 2, "right"));  // Output: [4, 5, 1, 2, 3]

// 📝 Testing Left Rotation
console.log(rotateArray([1, 2, 3, 4, 5], 2, "left"));   // Output: [3, 4, 5, 1, 2]
