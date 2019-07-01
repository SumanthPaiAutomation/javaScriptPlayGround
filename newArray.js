var data = [[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[-1,0,1]]

var hashMap = {}

data.forEach(function(arr){
  // If your subArrays can be in any order, you can use .sort to have consistant order
  hashMap[arr.join("|")] = arr;
});

var result = Object.keys(hashMap).map(function(k){
  return hashMap[k]
})

console.log(result)