let myString ="Banana"
let myMap= new Map();
for (let char of myString) {
	myMap.set(char, (myMap.get(char) || 0) + 1);
}
console.log(myMap)
for(let eachValue of myMap.values()){
    if(myMap.get(eachValue)>1){
        console.log(eachValue)
    }
}

const pairs = [["name", "John"], ["age", 30]];
const userMap = new Map(pairs);

// Map to Array
const backToArray = Array.from(userMap);

// Object to Map
const person = { name: "John", age: 30 };
const personMap = new Map(Object.entries(person));

// Map to Object
const mapToConvert = new Map([
  ["fruit", "apple"],
  ["vegetable", "carrot"]
]);
const obj = Object.fromEntries(mapToConvert);