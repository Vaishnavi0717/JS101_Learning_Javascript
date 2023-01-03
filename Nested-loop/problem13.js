let N= 4; 
let arr=[-2,0,8,4]
   let min= arr[0];
    let max = arr[0];
    
    for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    } console.log(min);
