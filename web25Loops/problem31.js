let N= 5;
arr=["A", "B", "C", "D", "D"]
 let count= 0;
    
    for(let i = 0; i<arr.length; i++){
    if(arr[i]=="D"){
    count++;
    }
 }
 if(count>0){
    console.log("Yes");
}
else{ 
    console.log("No");
}

