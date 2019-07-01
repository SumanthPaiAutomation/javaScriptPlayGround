function countStringer(stringer,subStringer){
    let count =0;
    let output=[];
    output=stringer.split(' ');
    for(var i=0;i<output.length;i++){
        if(output[i]===subStringer.toLowerCase()){
            count+=1;
        }
    }
    return count ;
    
        
    }
    console.log(countStringer("the quick brown fox fox fox fox jumps over the lazy dog","fox"));