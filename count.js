const counter = {
    count :0,

'getValue': function(){
       return this.counter;
    
},
'up': function(){
        this.count=this.count+1
        return this.count;
},
'down': function(){
    
    this.count = this.count-1;
    return this.count
},
'reset': function(){
     this.count =0;
     return this.count;
},
'upBy': function(n){
     this.count = this.count+n;
        return this.count
}
}
