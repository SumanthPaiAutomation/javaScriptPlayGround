function person(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName;
this.fullNamer = function(){
    return this.firstName+this.lastName;
}


}
const p1 = new person('ani','sg');
console.log(p1.fullNamer())