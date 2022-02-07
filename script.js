// // variables
// var exampleVariable;
// var message = "hello w";
// var lastName, fisrtName = "Imashev";
// var 
// // number - 2 * * 53 - 1
// // Javascript -  математические операции не ведут к ошибке
// var exampleNumber = 123;
// var exampleNumber2 = 123.45;
// var exampleNumber3 = Infinity; // -Infinity 
// var exampleNumber4 = NaN; // not a number


// // document.write (typeof exampleNumber4)

// // String
// var exampleString = "Hello world";
// var exampleString2 = 'Hello world';
// var exampleString3 = `hello w`;
// var exampleString4 = "4"; // считается строкой тк есть "" ; '' ; `` ;

// // boolean
// var exampleBoolean1 = true;
// var exampleBoolean2 = false;

// // special types
//  var exampleNull = null; //пустая переменная
//  var exampleUnderfined;
//  var exampleUnderfined2 = underfined;

// //  BigInt - not now
// var exampleBigInt = 151982

// // symbol - not now
// var exampleSymbol = Symbol("id");

// // objects
// var exampleObject1 = {};
// var exampleIbject2 = Math;
// // document.write (typeof exampleObject1);

// // Weird stuff

// // Output 
// // alert("hello w")
// // var result = prompt("hello w");
// // var result = confirm("hellow w");
// // document.write("hello w");

// // type conservation
// var exampleTypeConservation1 = 5 + "5";
// var exampleTypeConservation2 = 5 + 5 +"5";
// var exampleTypeConservation3 = false + 2;
// var exampleTypeConservation4 = new String(5);
// var exampleTypeConservation5 = new Number("10");
// var exampleTypeConservation6 = new Boolean("");

// // document.write(exampleTypeConservation2);
// // console.log(exampleTypeConservation2);

// // Math 
// // Operand x = 5 + 6;
// // Operands: 5, 6;
// // OPerator: +

// // Unary Operator
// var x = 5;
// x = -x;
// var y = "3";
// y = +y;

// // Binary operator 
// var x = 1, y = 3;
// y = x + y;

// // 
// var exampleMath1 = 5 + 6;
// var exampleMath2 = 5 - 1;
// var exampleMath3 = 5 / 10;
// var exampleMath4 = 5 * 5;

// // Remainder
// var exampleMath5 = 5 % 2; // 1 
// var exampleMath = 6 % 2; // 0

// // Exponent
// var exampleMath7 = 2 ** 2;


// // fast modify
// var exampleMath8 = 4;
// exampleMath8 += 5;
// exampleMath8 -= 3;// exampleMath8 = exampleMath8 - 3;



// // increment / decrement
// var exampleMath9 = 0;
// exampleMath9++;
// exampleMath9--;
// ++exampleMath;
// --exampleMath;

// // Comparisons
// // var exampleComparison1 = 6 > 5; true
// // var exampleComparison2 = 6 < 5; false
// // var exampleComparison3 = 6 >= 5; true
// // var exampleComparison4 = 6 <= 5; false
// // var exampleComparison5 = 6 === 5; false
// // var exampleComparison6 = 6 == 5; f
// // var exampleComparison7 = 5 !== 5; false
// // var exampleComparison8 = "5" == 5; true
// // var exampleComparison9 = "5" != 5; true 

// // document.write ("5" == 5);

// // If else 
// // if (5 > 3) {
// //     document.write("hello world");
// // }
// // else {
// //     document.write("bye w")
// // }

// // 
// /*
// Если чайник кипит
// Выключить газ
// Иначе
// Проверить позже
// */

// // if (isKettleBoling()) {
// //     switchGasOff();
// // }
// // else {
// //     checkLater();
// // }

// var age = prompt("how old ar u?");// alert ("u ar" + age + "years old.")
// var votingAge = age - 18;
// if (votingAge === NaN) {
// alert("wrong input. Numbers only.")
// }
// else if (votingAge < 0) {
// alert("You are too young for vote.")
// }
// else {
// alert("you could-ve vote for " + votingAge + " years" )
// }

// 

// var userNumber; 
// while (userNumber != 13) {
//     userNumber = prompt("Write a thirteen number.")
// }


// var userNumber; 
// while (userNumber != 3.14) {
//     userNumber = prompt("Write a number PI?")
// }


// начни с числа 1
// увеличивать число на единицу
// пока число меньше или равно 3


// for (var index = 1; index <= 3; index++) {
//     document.write(index);
// }

// var exampleFor = "blssed-cursd";
// for (var index = 10; index >= 3; index--) {
//     document.write(exampleFor [index] + " ");
// }

// // Functions
// function saHello(name, timeOfDay);

// var exampleVar = "";
// let exampleLet = "";
// const EXAMPLE_CONST = ""; // const never change

// var vasya = {
//     name: "Liya",
//     lastName: "Petrovsky",
//     age: 20,
//     hobbies: {
//         art: "drawning, singing",
//         display: function() {
//              document.write(`I love ${this.art}.`);
//         }
//     },
//     // bye: {
//     //     sayBye: "That's all for today ${this.bye}."
//     // }
//   greet: function() {  //  method
//         document.write(`Hello, my name is ${this.name}! I'm ${this.age} years old. :) `);

//     }
// }

// vasya.greet();

// vasya.hobbies.display()
// document.write(vasya.age)
// document.write(vasya.lastName)
// document.write(vasya.hobbies.art)
// 1. Call 'greet' methid multiple times
// 2. Include age in the greeting.
// 3. Try changing name and age.
// 4. Create method 'bye'.

// document.body.style.backround = "red";
// document.body.textContent = "hello world";



// getElementBYId
// let helloWorldDiv = document.getElementById("hello-world");

// helloWorldDiv.textContent = "Nice to meet you."
// helloWorldDiv.style.background = "blue";
// helloWorldDiv.style.color = "white";
// helloWorldDiv.style.textDecoration = "underline";
// helloWorldDiv.style.fontSize = "20px";

// let allParagraphs = document.getElementsByTagName("p");

// // console.log(allParagraphs);
// // getElementsByTagName
// for (let paragraph of allParagraphs) {
//     paragraph.style.backgroundColor = "blue";
//     paragraph.style.fontWeight ="bold";
//     paragraph.style.color = "pink";
// }

// getElementsByClassName
// let classNames = document.getElementsByClassName("hello-world");

// for (let helloWorld of classNames) {
// helloWorld.style.background = "yellow";
// helloWorld.style.fontStyle = "italic";
// }

// // querySelector 
// let helloWorld2 = document.querySelector("#hello-world");
// helloWorld2.style.backgroundColor = "purple";

// let helloWorlds2 = document.querySelectorAll(".hello-world"); 

// for (let helloWorld of helloWorlds2 ) {
// helloWorld.style.fontSize = "10px";
// }
    
// document.querySelector('p:first-of-type').textContent = "HELLO";
// document.querySelector('p:last-of-type').style.background = "grey";
// // 

// var button1 = document.querySelector('button:nth-of-type(1)');
// var button2 = document.querySelector('button:nth-of-type(2)');
// var button3 = document.querySelector('button:nth-of-type(3)');
// var allP = document.querySelectorAll('p');

// 
// 7.2.22 - JavaScript

// модифицирование

//  method 1

// // create
// document.body.innerHTML = "<h1>Hello World</h1>";
// // find
// let h1Element = document.querySelector('h1');
// // modify
// h1Element.style.color = "rgb(255, 0 , 0)";

// // method 2

// // create
// let h2Element = document.createElement('h2');

// // attach
// document.body.prepend(h2Element);

// // modify
// h2Element.textContent = "Nice to meet you <3";
let exercisesElement = document.querySelector('#exercises');
// append - insert element before closing tag
// prepend - insert after closing tag
// before - insert el before opening tag
// after - insert el after closing tag
// create
// let h1Element = document.createElement('h1');

// // modify
// h1Element.textContent = "H1 header"; 
// h1Element.style.color = "rgb(100, 200, 10)"
// // attach
// exercisesElement.append(h1Element);

// let h2Element = document.createElement('h2');
// h2Element.textContent = "H2 header";
// exercisesElement.append(h2Element);
// h2Element.style.color = "rgb(100, 190, 10)"

// let h3Element = document.createElement('h3'); // create
//  exercisesElement.append(h3Element);// attach
// h3Element.textContent = "H3 header"; // modify
// h3Element.style.color = "rgb(50, 100, 10)"

// let h4Element = document.createElement('h4');
// exercisesElement.prepend(h4Element);
// h4Element.textContent = "H4 header";
// h4Element.style.color = "rgb(20, 60, 10)"

// let h5Element = document.createElement('h5');
// exercisesElement.before(h5Element);
// h5Element.textContent = "H5 header";
// h5Element.style.color = "rgb(10, 20, 10)"


// let h6Element = document.createElement('h6');
// exercisesElement.after(h6Element);
// h6Element.textContent = "H6 header";
// h6Element.style.color = "rgb(100, 20, 10)"


// // Exercise
// let exercise1 = document.querySelector('#exercise1');
// exercise1.before('before');
// exercise1.prepend('prepend');
// exercise1.attend('attend');
// exercise1.after('after');
// // exercise1.replaceWith('replaced');




let buttonElement = document.createElement('button');
exercisesElement.prepend(buttonElement);
buttonElement.textContent = "Launch Meeting";
buttonElement.style.background = "blue";
buttonElement.style.padding = "15px 20px";
buttonElement.style.fontFamily = "Sans-Serif";
buttonElement.style.borderRadius = "10px";
buttonElement.style.color = "white";
buttonElement.style.border = "none";
buttonElement.style.margin = "";







 




