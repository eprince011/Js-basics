// // Arrays
// // let course = 'my school'
// // console.log(course)


// // eg2.
// let x = 5;
// let y = 3;
// let z = x + y;
// console.log(z)

// // constant Arrays
// const student = ["emezu", "wiliiams", "prince"];
// student[3] = "strongest";
// student.push("Audo");
// console.log(student)
// calculate the length
// console.log("Number of items in array is :", student.length)

// moneyRate = 0.3;
// moneyRate = 1;
// console.log(moneyRate);

// a =5; b = 6; c = a + b;
// console.log(c)




// let x = 100 + 50;
// console.log(x)

// let x = "16" + "Prince"; 
// console.log(x)


// let x1 = 20.567560;
// let x2 = 10;
// console.log(x1)





// let x = 5;
// let y = 5;
// let z = 6;
// (x == y)
// (x == z)
// console.log(x)



// const cars = ["saab", "volvo", "bmw"];
// // console.log(cars[2])

// const person = {
//     firstName: "prince",
//     lastName: "williams",
//     age: 50,
//     eyeColor: "red"
// };
// console.log(person["firstName"] +  " is " + person.age + " years old.")

// let text = "my work";
// console.log(text)

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length)





// const alert = ("hello")
// console.log(alert)

// const ages = [30, 80, 18, 20];

// function checkAdult(age) {
//     return age < 18;
// }
// ages.some(checkAdult);
// let result = ages.some(checkAdult);
// console.log(result)

// let text = "Please visit microsoft and microsoft!";
// let newText = text.replaceAll("microsoft", "W3school");
// console.log(newText)





// const fruits = ["mango", "apple", "zaddy"];
// fruits.reverse()
// console.log(fruits)

// let fruits = ["beans", "rice", "maiza", "corn"];
// let man = fruits[length -1]
// console.log(man)


// const fruits = ["orange", "banana", "apple"];
// let man = fruits instanceof Array;
// console.log(man)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let  = fruits.push("Kiwi");
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.sort()
// console.log(fruits)


// const d = new Date();
// console.log(
    
//     const d = new Date();
//    name =  d.setFullYear(2022);
//    console.log(name)

// let x = 0;
// Boolean(x);
// console.log(x)

// var xkl = Boolean(10 < 9);
// console.log(xkl)

// let fgh = Boolean(0);
// console.log(fgh)

// let voteable = (age < 18) ? "Too young":"Old enough";
// voteable = (age < 18) ? "Too young":"Old enough";
// let age = 20
// if(age > 21) {
//   console.log(true);
// }else{
//   console.log(false);
// }

// let iscool = 'john'
// if(iscool === 'john') {
//   console.log(true);
// }else{
//   console.log(false);
// }


// let kad = '7000'
// if (20000 > 7000) {
//   console.log(true);
// }else{
//   console.log(false);
// }
// let hour = 17
// if (hour > 18) {
//   console.log('good day'); 
// } else {
//   console.log('good evening');
// }




// if (hour < 18) {
//     greeting = "Good day";
//   }

// var time = 18
// if (time < 10) {
//   console.log('good morniing');
// } else if (time < 20) {
//   console.log('good day');
// } else {
//   console.log('good evening');
// }

// let x = ("switch")
// switch (new Date().getDay()) {
//   default:
//     consolet.log("Looking forward to the Weekend");
//     break;
//   case 6:
//     consolet.log("Today is Saturday");
//     break;
//   case 0:
//     consolet.log("Today is Sunday");
// }




// for (let i = 0; i < 100; i++) {
//   console.log(i); 
// }


// for (let k = 3; k < 36; k+=3) {
//   console.log(k)
// }



// for (let y = 12; y < 156; y+=12) {
//   console.log(y)
// }
 
// const person = {fname: "John", lname: "Doe", age: 25};
// let text = "";
// for (let x in person) {
//   text += person[x]+" ";
  
// }
// console.log(text)


// JS FOR IN 
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x]+ " ";
// }
// console.log(txt)


// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + " "
// }
// console.log(text)

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x + " \n";
// }
// console.log(text)

// let i = 0
// let text = ""
// while (i <= 10) {
// text += "The number is " + i + "\n";
//   i++;
//   console.log(text)
// }

// let i = 0
// let text = ""
// do {
//   text += "The number is " + i + "\n"
//   i++;
// }
// while (i < 10);
// console.log(text)


// comparing for and while
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// for (;cars[i];) {
//   text += cars[i];
//   i++;
// }
// console.log(text)

// let text = "";
// for (let i = 0; i <= 10; i++) {
//   if (i === 3) { 
//     break;
//   }
//   text += "The number is " + i + "\n"

// }
// // console.log(text)

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { 
//     continue;
//   }
//   text += "The number is " + i + "\n";
// }
// console.log(text)



// const name = "prince"
// let text = ""
// for (let x of name ) {
//   text += x + "\n";
  
// }
// console.log(text)


// const letters = new Set(["a","b","c"]);
// let text = ""
// for (const x of letters) {
//   text += x + "\n"
//   // code block to be executed
// }
// console.log(text)


// const letters = new Set(["a","b","c"]);

// console.log(letters.size)


// const letters = new Set()
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters)

// // const letters = new Set(["a","b","c"]);

// // List all Elements
// // let text = "";
// // const letters = new Set(["a","b","c"]);

// // for (const x of letters.values()) {
// //   text += x + "\n";
// // }
// // console.log(text) 


// // myFunction = (a, b) => a * b;
// // let x = myFunction(4, 5);
// // console.log(x)

// // // let person = {firstName:"John", lastName:"Doe",
// // //  age:50, eyeColor:"blue"};
// // // let {firstName, lastName, age} = person
// // // console.log(person.firstName + " " + person.lastName + " " + person.age 
// // // + " years old")


// // const person = {};
// // person.firstName = "John";
// // person.lastName = "Doe";
// // person.age = 50;
// // person.eyeColor = "blue";
// // console.log(person.firstName + " " + person.lastName + " " + person.age 
// // + " years old")



// // // const person = new Object();
// // // person.firstName = "John";
// // // person.lastName = "Doe";
// // // person.age = 50;
// // // person.eyeColor = "blue";
// // // console.log(person.firstName + " " + person.lastName + " is " 
// // // + person.age + " " +"years old")

// // // let txt = '';
// // // const person = {
// // // firstname: "Prince",
// // // lastname: "willi",
// // // age: 20,
// // // }
// // // for (let x in person) {
// // //   txt += person[x ] + " "
// // // }

// // // const person = {
// // //   firstname: "John",
// // //   lastname: "Doe",
// // //   age: 50,
// // //   eyecolor: "blue"
// // // };

// // // delete person.age;

// // // document.getElementById("demo").innerHTML =
// // // person.firstname + " is " + person.age + " years old.";


// // const person = {
// //   firstname: "John",
// //   lastname: "Doe",
// //   age: 50,
// //   eyecolor: "blue"
// // };

// // person.nationality = "English";
// // console.log(person.firstname + " is " + person.nationality + ".")
// // // console.log(x)



// // const person = {
// //   firstname: "John",
// //   lastame: "Doe",
// // //   age: 50,
// // //   eyeColor: "blue"
// // // };

// // // delete person.age;
// // // console.log(person.firstname +" is " + person.age + " years old")

// // myObj = {
// //   name: "Prince",
// //   age: 20,
// //   cars: {
// //     car1:"ford",
// //     car2:"benze",
// //     car3:"lexus"
// //   }
// // }
// // console.log(myObj.name+" "+"has " + myObj. cars. car2)

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// // To access arrays inside arrays, use a for-in loop for each array:
// console.log( myObj.cars[1].name + " " + myObj.cars[1].models +
//  " " + myObj.cars[2].name +" "+ myObj.cars[2].models)




// function

/*
A small code to show me my name and age using prompt and alert functions

Then a conditional statement to show if user is 18 years and above or not
*/

// solution
// alert("Hello pls fill your details here")

// let name = prompt("what is your name? ")



// alert(`Your name is ${name}`)



// alert("Hello pls fill your details here")

// prompt("what is your name? ")
// alert(`Your name is ${name}`)
// // prompt()
//   if (confirm("are you 18 years or older? ")){
//     greetings = console.log("continue your details");

//   }else {
//     greetings = console.log("you are under age old")
//   }
// alert('you are 18 years')
// // prompt("are you 18 years old")

// alert("thanks for your details!")


// const person = {
//   firstName: "Prince",
//   lastName: "williams",
//   id: 975738,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
      
//   }
// }
// console.log(person.firstName + " "+person.lastName)

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
// };
// person.name = function() {
//   return this.firstName + " " + this.lastName;

// };
// let name = "my father is";
// console.log(name + " " + person.name())



// WORKS WITHOUT BOOKS

// using  built-in method
// // Eg 
// // let name = "Hello word";
// // let x = mesage.toUpperCase;

// // now check
// const person= {
//     firstName: "Prince",
//     lastName: "Williams",
//     id: 1635,
// };
// person.wisky = function(){
//     return (this.firstName + " " + this.lastName).toUpperCase()
// // };
// // console.log("My dad is" +" "+ person.wisky());


// // FUNCTUON JS

// // function declaration
// // let a = job(4, 3);
// // function job(x, y) {
// //     return x * y;
// // }
// // console.log(a)

// // function Expression
// function add(a, b) {
//     return a + b
    
// }
// console.log (add(23, 2))

//function that prompts a user for 2 numbers then alerts 
//the result of addition of those two numbers

// function egg(a, b, c){
//     return Math.round(a * b / c)
// }
// console.log( egg(2, 2, 3) )

// const x = function (a, b, c) {
//     return Math.round (a * b / c)
// }
// let z = x(2, 2, 3);
    
// console.log(z)


// let x = prompt("frist number")
// let y = prompt("second number")
// let result = Number(x) + Number(y)
// // alert("result is "+  result)

// const x = function (a, b) {return a * b};
// let z = x(4, 3);
// console.log(z)

// const jack = new Function("a", "b", "return a * b");
//  let f = jack(4, 3);
//  console.log(f)

// // eg2
// const myFunction = new Function("a", "b", "c", "return a * b  / c");

// let x = myFunction(4, 3 , 2);
// console.log(x)

// const myFunction = function (a, b, c) {return a * b / c};

// let x = myFunction(4, 3, 3);


// // function myFunction(r, d) {
// //     return arguments.length;
// //   }
// //   x = myFunction(2, 4, 3);
// //   console.log(x)

// // function jack(a, b) {
// //     return a * b;
// //   }
  
// //   let g = jack.toString();
// //   console.log(g)

// // const x = (x, y, z) => x * y / z;
// // j = x (5, 5, 3);
// // console.log(j)
  

// // const x = (x, y) => { return x * y };
// //  egg = x(5, 5);
// //  console.log(egg)

// x = sumAll(1, 123, 500, 115, 44, 88);

// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(x)

// i = 0
// for (let i = 0; i < 100; i++) {
//           console.log(i); 
//         }
//     console.log(i)
  
    // function myFunction(x, y) {
    //   if (y === d) {
    //     y = 2;
    //   }  
    //   return x * y;
    // }
    // sok = myFunction(4);
    // console.log(sok)

// function jack(a, b){
//       return a * b;
  
//     }
//    let x = jack(10, 2);
// console.log(x)



// const jack = function(a, b) {
//     return a * b;
//   }
  
//   let x= jack(4, 3);

// function jack(a, b) {
//   return a * b;
// }
// x = window.jack(10, 2); 
// console.log(x)

const name = "prince"

function showName() {
  var othername = "chamberlian";

}
showName();
console.log(othername);


