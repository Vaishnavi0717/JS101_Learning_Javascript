for(let farm=1; farm<=5; farm++){
  console.log(farm, "farms")
  bag= "";
  for(let seed= 1; seed<=farm; seed++){
    bag=bag+"*";
  }
  console.log(bag)
}