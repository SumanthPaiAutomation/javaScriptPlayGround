//INPUT: rotate([22, 11, 500, 92], 2);
//OUTPUT: [500, 92, 22, 11];
let arra1 = [22,11,500,92];

function rotate(a,k){
    //type code here
        let output = [];
        let size=a.length;
        if (a.length == 0) {
            return 'empty array';
        }
       for(var i=0;i<a.length;i++){
           output[(i+k)%size]=a[i];
       }
return output;

    }
    console.log(rotate(arra1,2));

  

