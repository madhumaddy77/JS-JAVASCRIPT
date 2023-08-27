const phno=Number("lay1")

const obj1={
    name:"Madhu",
    fullname: "madhu bharadwaj",
    [phno]:"lay1",
    branch:"ai & ml",
    usn:"4GM21AI027",
    email: "madhubbhrr@gmail.com"
}
// console.log(obj1.name);
// console.log(obj1["name"]);
// console.log(typeof(obj1.name));
// console.log(typeof(obj1.phno));
// console.log(obj1[phno]);
// console.log(obj1["fullname"]);


// console.log(obj1.email);
obj1.email="madhubbgoogle@gmail.com"
// console.log(obj1.email);
// Object.freeze(obj1)

obj1.email="madhumicrosoft@gmail.com"

// console.log(obj1.email);

obj1.greeting =function(){
    console.log("Hello JS user");
}
obj1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(obj1.greeting());
console.log(obj1.greetingTwo());