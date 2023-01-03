

for(let horizontal=1; horizontal<=10; horizontal++){
  let bag= "";
  for(let vertical=1; vertical<=10; vertical++){
    if(horizontal==1 || horizontal==10){
      bag= bag+"*";
    }
 else if(vertical==1 || vertical==10){
      bag= bag+ "*";
     }
  else{
      bag= bag+ " ";
  }
  }
  console.log(bag);
}