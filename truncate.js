function truncateString(str, num) {
    var output = [];
    output = str.split(" ");
    console.log(output);

    // Clear out that junk in your trunk
     if(str.length>num){
      console.log(output[0]+' '+output[1]+str.charAt(str.length)+'...')
    }else if(str.length == num){
        return str;
      }
   
   
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);