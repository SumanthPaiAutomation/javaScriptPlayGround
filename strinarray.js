function mutation(arr) {
    
    var output =[...arr[0]]
    var sec = [...arr[1]]
    console.log(output);
    console.log(sec);
    var index;
    sec.length>output.length?
    //if()
    for(var i=0;i<=output.length;i++){
      if(output.lastIndexOf(sec[i])== -1){
        //console.log('not a substring')
        continue;
      }else{
        //console.log('may be a substring') 
         index =i;
         //console.log(index);
         if((index+1) == arr[1].length){
           console.log("Hey I am completely present ");
         }
      }
    }
    
  }
  
  mutation(["major", "sumanth"]);
  //mutation(['Rama','ox']);