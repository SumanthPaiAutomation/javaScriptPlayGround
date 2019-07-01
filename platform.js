
var a=[5,6,7];
var b=[3,6,10];

function compareTriplets(a, b) {
    var out = []
    var alicePoint=0;
    var bobPoint=0;
    for (var i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            alicePoint += 1;
        } else if (a[i] < b[i]) {
            bobPoint += 1;

        } else if (a[i] == b[i]) {
            continue;
        }
    }
    out.push(alicePoint, bobPoint);
    var result = out.toString().replace(',',' ');
    console.log(result);
}
compareTriplets(a,b);

