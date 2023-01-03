let details={
  name: "vaishnavi",
  age: 22, 
  add: "pune",
  father: "rajendra", 
  mother: "swati", 
  driving_licence: true
  
};

// console.log(details);

// if we want to print only name we can use 
// 1) dot notation 

// console.log(details.name);
// console.log(details.age);

// 1) braket notation

// console.log(details["mother"]);
// console.log(details["father"]);

// we can add new values by using
details.bestfriend= "sandip";
details["hobbies"]= "Swimming";



// we can update values by using

// details.age=24;
// details["add"]="Baramati";
details.driving_licence= false; 
// console.log(details)


// object keys are unique
// no two keys with the same name will be there
// if the key is already present we can update the value
// if key is not present in object we can create and add in the object

// 3) deleting the element from Object

// delete details.name;
// delete details["age"];

console.log(details);
