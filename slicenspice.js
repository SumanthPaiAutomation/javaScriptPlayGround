function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    console.log('initial arry',localArray);
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      console.log(localArray);
      n++;
      console.log(n);
    }
    return localArray;
    console.log('final array',localArray)
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);