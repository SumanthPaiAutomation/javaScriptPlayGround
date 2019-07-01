function getIndexToIns(arr, num) {
    var index;
    var localarr =[...arr];
    console.log('local array',localarr)
    for(var i=0;i<=arr.length;i++){
      if(num==localarr[i]){
        return 0;
      }
      else{
          if(num>localarr[i]){
            index =i;
            console.log(localarr[i]);
          }
      }
    }
    localarr.splice(index,0,num);
    console.log(localarr);
  }
  
 
  getIndexToIns([10, 20, 30, 40, 50], 35)
  getIndexToIns([2, 5, 10], 15)
  getIndexToIns([40, 60], 50)