function reverseString(str) {
    if (str === "") return ""; // base case
    return reverseString(str.slice(1)) + str[0]; // recursive case
  }
  
  console.log(reverseString("hello"));