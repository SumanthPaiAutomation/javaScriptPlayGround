function titleCase(str) {
    var words =[];
      words= str.split(" ");
      var output=[];
      var res=''
      for(var i=0;i<words.length;i++){
          output.push((words[i].charAt(0).toUpperCase()+words[i].slice(1,words[i].length).toLowerCase()));
          res+= output[i]+' '
      } 
   console.log(res);
  }
  
  titleCase("sHoRt AnD sToUt")