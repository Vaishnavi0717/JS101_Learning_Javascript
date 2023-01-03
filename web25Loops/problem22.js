let arr=["Goerge","Mary","Olar","celin"];
count=0; 

for(let i= 0; i <= arr.length-1; i++){
let str= arr[i];
  if(str[0] !="A" || str[0] !="E" || str[0] !="I" || str[0]!="0" || str[0]!="U"){
    count++;
  }
}console.log(count)
