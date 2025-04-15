function getPermutations(str) {
    const results = [];
  
    function permute(arr, current = "") {
      if (arr.length === 0) {
        results.push(current);
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        let next = arr.slice();
        let char = next.splice(i, 1);
        permute(next, current + char);
      }
    }
  
    permute(str.split(""));
    return results;
  }
  
  console.log(getPermutations("ABC"));