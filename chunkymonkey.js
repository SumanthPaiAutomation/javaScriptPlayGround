//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var cut = arr[size];
    var local = [...arr];
    var output = [];
    if(arr.length%size == 0){
        var firstarr = local.splice(0,size);
        var secarr =  local.splice(size);
        console.log(firstarr);
        console.log(secarr);
        output.push(firstarr)
        output.push(secarr);
        console.log(output);
        
    }
        
    
    /* for(var i =0;i<=)
    start[i]=arr[size++]
    console.log(cut);
    return arr; */
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
  /* function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0,size));
    }
    return newArr;
  }
chunkArrayInGroups(["a", "b", "c", "d"], 2); */