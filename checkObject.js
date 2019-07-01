const person = {

    'firstname':'arjun',
    'lastname':'reddy',
    'age' : 25,
    'fullname': function(){
                return this.firstname+' '+this.lastname;
    },
    'compare':function(n){
                            if(person.age<n){
                                                return 'older than arjun';
                                            }
                                            else{
                                                return 'younger than arjun';
                                            }
                        },
    runs : [20,50,60],
    'calcAvg': function(){
        let total =0;
        for(var i=0;i<this.runs.length;i++) {
            total+= this.runs[i];
        }
        return total/this.runs.length;
    }

}
console.log(person.fullname());
console.log(person.compare(12));
console.log(person.compare(35));
console.log(person.compare(25));
person.runs.push(100);
console.log(person.calcAvg());