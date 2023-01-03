let n=5;
let names= ["chunnu", "munnu", "pablo", "raju", "shyam"];

let isPresent=false;

for(let i=0; i<n; i++){
  if(names[i]=="shyam"){
    isPresent=true;
  }
}
if(isPresent==true){
  console.log(true);
}
else{
  console.log(false);
}