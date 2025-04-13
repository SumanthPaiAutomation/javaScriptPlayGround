// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

var sortPeople = function(names, heights) {
    // Pair each name with its height
    let people = names.map((name, i) => {
        return { name: name, height: heights[i] };
    });

    // Sort by height in descending order
    people.sort((a, b) => b.height - a.height);

    // Return just the names, in the new order
    return people.map(person => person.name);
};