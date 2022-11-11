//Array Examples 1
let names = ["Sai", "Sidhodhan", "Shubham", "Aniket"];
//length of array
console.log(names.length);

//print data and index
names.forEach((value, index) => {
    console.log(value, index);
});

//push use to add  data at the end
names.push("sakshi");
console.log(names);

//pop remove last element in array
names.pop();
console.log(names);

//join method
console.log(names.join(","));

//tostring method
console.log(names.toString());

//shift method:remove From front
names.shift();
console.log(names);

//unshift method:add from start
names.unshift("sudha");
console.log(names);
//The concat() method creates a new array by merging (concatenating) existing arrays:
let names1 = ["abc"];
const newArray1 = names.concat(names1);
console.log(newArray1);

//The splice() method adds new items to an array.
names.splice(0, 1, "xyz");
console.log(names);

//The slice() method slices out a piece of an array into a new array.
console.log(names.slice(0, 1));
console.log("Slice array: " + names);

//sort() sort array
names.sort();
console.log("Sort array: " + names);

//reverse() reverse array
names.reverse();
console.log("Reverse array: " + names);

//Example2
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
//length of array
console.log(numbers.length);

//print data and index
numbers.forEach((value, index) => {
    console.log(value, index);
});

//push use to add  data at the end
numbers.push(5);
console.log(numbers);

//pop remove last element in array
numbers.pop();
console.log(numbers);

//join method
console.log(numbers.join(","));

//tostring method
console.log(numbers.toString());

//shift method:remove From end
numbers.shift();
console.log(numbers);

//unshift method:add from start
numbers.unshift(12);
console.log(numbers);

//The concat() method creates a new array by merging (concatenating) existing arrays:
let numbers1 = [45];
const newArray = numbers.concat(numbers1);
console.log(newArray);

//The splice() method adds new items to an array.
numbers.splice(1, 0, 14);
console.log(numbers);

//The slice() method slices out a piece of an array into a new array.
console.log(numbers.slice(0, 1));
console.log("Slice array: " + numbers);

//sort() sort array
numbers.sort();
console.log("Sort array: " + numbers);

//reverse() reverse array
numbers.reverse();
console.log("Reverse array: " + numbers);