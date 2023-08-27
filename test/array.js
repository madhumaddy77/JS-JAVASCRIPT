array1= new Array(1,2,3,4,5)
// console.log(array1);

array2=[2,4,6,8,10]
// console.log(array2);

// array2.push(1)
// console.log(array2);

// array2.pop(1)
// console.log(array2);

// array2.pop(6)
// console.log(array2);
// array2.shift(1)
// console.log(array2);
// array2.unshift(1)
// console.log(array2);
// array2.unshift(334567)
// console.log(array2);
// array2.shift(2)
// console.log(array2);
// array2.unshift()
// console.log(array2);

// console.log(array2.includes(2));
// console.log(array2);

// console.log(array2.indexOf(6));
newarr2=array2.join()
// console.log(array2);
// console.log(typeof(newarr2));

myarr3=[1,2,3,4,5,6,7,8,9,10]
// console.log(myarr3);

slice1=myarr3.slice(1,4)
// console.log("1",slice1);

// console.log(myarr3);
splice1=myarr3.splice(1,4)
// console.log("2",splice1);

// console.log("2",splice1);


flower=["rose","jasmin","sunflower","hibiscus"]

fruits=["apple","bannana","watermelon","jackfruit"]

console.log(flower,fruits);

console.log(flower.concat(fruits))

split_array=[...flower,...fruits] // split (important)
console.log(split_array);


mix_Array=[1,[2,3],4,[6,8],5,[8,10]]

single_Array=mix_Array.flat(Infinity)
console.log(single_Array);

console.log(Array.isArray("MADHU"));
console.log(Array.from("MADHU"));
console.log(Array.of("MADHU"));
