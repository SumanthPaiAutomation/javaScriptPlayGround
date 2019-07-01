function findElement(arr, func) {
    /* let num = 0;
    return num; */
    arr.find(num=>{
      if(func(num)){
        console.log(num) ; 
        return num
      }
      
    })
    
        return undefined
      
  }
  
  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })