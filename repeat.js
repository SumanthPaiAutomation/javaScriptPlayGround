function repeatStringNumTimes(str, num) {
    // repeat after me
    var res=''
    for(var i=1;i<=num;i++){
      res = res+str;
    }
    console.log(res);
  }
  
  repeatStringNumTimes("*", 3);