function counter(){
    var count =0;
   this.up = function(){
       return this.count=this.count+1;
   }
   this.down = function(){
    return this.count=this.count-1;
}
this.reset = function(){
    return this.count=0;
}
this.upBy = function(n){
    
    this.count+n;
    return this.count;
}
    
    }
    const p2 = new counter();
    console.log(p2.upBy(9))