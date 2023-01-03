
let n= 4;
arr=[1,2,3,4]
    let even=0;
     let odd=0;
for(let i = 0; i<n; i++){
        if(i%2==0){
       even=even+arr[i]}
    } 
 if(even<odd){
    console.log("Odd");
} 
else{
    console.log("Even");
} 