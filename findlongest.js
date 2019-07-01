function findLongestWordLength(str) {
    var output=[];
    output = str.split(" ");
    console.log(output)
    var index;
    var first =  output[0].length
    for(var i=0;i<=output.length;i++){
    console.log(output.indexOf(i).length);
    }
    /* for(var i=1;i<=output.length;i++){
      if(output[i].length>first){
        first = output[i].length
        index = i;
      }
    }
  return output[index];  */
  //console.log(first);
   
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");