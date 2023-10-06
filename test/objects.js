const phno = Number("lay1");

const obj1 = {
  name: "Madhu",
  fullname: "madhu bharadwaj",
  [phno]: "lay1",
  branch: "ai & ml",
  usn: "4GM21AI027",
  email: "madhubbhrr@gmail.com",
};
// console.log(obj1.name);
// console.log(obj1["name"]);
// console.log(typeof(obj1.name));
// console.log(typeof(obj1.phno));
// console.log(obj1[phno]);
// console.log(obj1["fullname"]);

// console.log(obj1.email);
obj1.email = "madhubbgoogle@gmail.com";
// console.log(obj1.email);
// Object.freeze(obj1)

obj1.email = "madhumicrosoft@gmail.com";

// console.log(obj1.email);

obj1.greeting = function () {
  // non-singleton object
  // console.log("Hello JS user");           //object literals
};
obj1.greetingTwo = function () {
  // console.log(`Hello JS user, ${this.name}`);
};

// console.log(obj1.greeting());

// console.log(obj1.greetingTwo());

//==================================================================================================================================

const obja = new Object(); //singleton object
// console.log(obja);

const details = {
  email: "madhubharadwajtech@gmail.com",
  username:{
  name: {
    firstname:"madhu",
    lastname: "Bharadwaj"
  }
}
};

// console.log(details.username.name.lastname);


object1={a:"GMIT", b:"UNIVERSITY"}
object2={c:"BIET", d:"FUTURE UNIVERSITY"}

const object3={object1,object2}
// console.log(object3);

const object4=Object.assign({},object1,object2)
// console.log(object4);

// console.log(Object.keys(details.username.name.firstname));
// console.log(Object.values(details.username.name.firstname));

// console.log(obj1.hasOwnProperty('fullname'));
// console.log(obj1.hasOwnProperty('name'));
// console.log(obj1.hasOwnProperty('usn'));
// console.log(obj1.hasOwnProperty('rollno'));

// deconstruct concept
const youtube = {
  js: "hitesh",
  ds: "love_babar",
  cp: "striver",
}



const {cp}= youtube
console.log(cp);
const {ds}= youtube
console.log(ds);






