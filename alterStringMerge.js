let str = "krishna";
let str2 = "veni";
let i = 0;
let j = 0;
let output = "";
let minLength = Math.min(str.length, str2.length);

while (i < minLength && j < minLength) {
    output += str[i] + str2[j];
    i++;
    j++;
}

// Append the remaining part of the longer string
output += str.length === minLength ? str2.slice(minLength) : str.slice(minLength);

console.log(output);