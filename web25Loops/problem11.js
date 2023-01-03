let arr=[12, 15, 8, 22,19,27,30, 26, 45];
for(let i=0; i<arr.length; i++){
  if(arr[i]%2 !=0 && (arr[i]%3==0 && arr[i]%5==0) ){
    console.log(arr[i]);
  } 
}