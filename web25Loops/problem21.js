let str="go%.a$."
new_str= "";
for(let i=0; i<str.length; i++){
  if(str[i]=="%"){
    new_str=new_str+"h";
  }
  else if(str[i]=="."){
    new_str=new_str+"";
  }
  else if(str[i]=="$"){
    new_str=new_str+"n";
  }
  else{
    new_str=new_str+str[i];
  }
}console.log(new_str)
