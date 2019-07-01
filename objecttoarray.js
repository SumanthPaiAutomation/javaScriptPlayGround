function tallyPoints(a){
    //type code here
        let output = a.toLowerCase();
        let object={}
        let count = 0;
        for (var i = 0; i < a.length; i++){
    
            if (output[i] == output[i + 1]) {
                count+=1
                object[a[i]] = count;
            }
        }
        
    }