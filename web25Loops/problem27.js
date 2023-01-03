let str= "I Am Web Developer"; 
count= 0; 

for(let i= 0; i<str.length; i++){
  if(str[i]== " "){
    count++;
  }
}
console.log(count+1);