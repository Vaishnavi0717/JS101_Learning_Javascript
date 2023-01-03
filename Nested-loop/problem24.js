num= 1221;

let bag= "";
 bag=bag+num; 

let bag1= "";
  for(let i=bag.length-1; i>=0; i--){
     bag1=bag1+bag; 
  }  
 if(bag==bag1){
     console.log("Yes");
 }
 else{
     console.log("No");
 } 
