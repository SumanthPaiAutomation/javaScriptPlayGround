/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let first=0
    let last=numbers.length-1
    let output=[]
    while(first<last){
        const sum=numbers[first]+numbers[last]
        if(sum<target){
            first++
        }else if(sum>target){
            last--
        }else{
            output.push(first+1)
            output.push(last+1)
            break
        }
    }
    return output
};