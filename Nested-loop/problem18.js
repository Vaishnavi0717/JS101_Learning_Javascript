let details={
  name: "vaishnavi",
  age: 22, 
  add: "pune",
  father: "rajendra", 
  mother: "swati", 
  driving_licence: true,
  hobbies: ["Swmming", "dancing", "reading"],
  location:{
    city: "Baramati",
    pin_code: 413102,
    state: "Maharashtra",
    landmark: "near hospital"
  }
  
};

// we can add array inside Object
// we can add object inside object

console.log(details.location.city);
console.log(details["location"]["state"]);