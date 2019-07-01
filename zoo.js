var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
  ];
  function zooInventory(a){
    //type code here
        let output = [];
        for (var i = 0; i < a.length; i++){
    
            const str =  `${a[i][0]} the ${a[i][1][0]} is ${a[i][1][1]} `
            output.push(str);
        }
        return output;
    }
    const resulter= zooInventory(myZoo);
    console.log(resulter);