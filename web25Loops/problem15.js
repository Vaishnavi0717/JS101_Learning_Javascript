let char= "c";
let small= ["a","b","c","d","e","f","g"];
let capital= ["A","B","C","D","E","F","G"];

for(let i=0; i<small.length; i++){
if(char==small[i]){
  char=capital[i];
} 
} 
console.log(char); 