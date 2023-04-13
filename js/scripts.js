// // alert("This is working externaly!");

// let firstname;
// var lastname;
// const age = 21;

// firstname = 'Kunle';

// firstname = 'Alex';

// lastname = 'James';

// lastname = 'John';

// let varcha = 123;

// let int = 5;

// let bool = true;

// let executed = true;

// let float = 1.5;







// DECISIONS

// if (executed) {
//     alert("True and working");
// }else{
//     alert("Not true!");
// }

// // age = 31;

// let sentence = `Hello ${firstname}, welcome to my blog!`;

// console.log(typeof float);
// alert(firstname);








//DECISIONS AND LOOPS

// let y = 5;
// let x = 3;

// let raining = true;
// let sunny = true;

// if (5 + 2 == 10){
//     console.log("Oops! Not Correct!");
// }else if (5 + 5 == 10){
//     console.log("Hurray! Correct!");
// }






// ARRAYS

// let fruits = 'Appple' 'Mango' 'Orange';


// let fruits = new Array('Apple', 'Mango', 'orange');

// let fruits = ['Apple', 'Mango', 'Orange', 31, 21.5, {full: 'Austine'}];

// console.log(fruits[fruits.length - 1]);

// let food = [
//     'Fufu',
//     [
//         "Apples",
//         'mango',
//         'oranges',
//         [
//             'Hard',
//             'Soft'
//         ]
//     ],
//     'Amala'
// ];

// fruits.push("Guava");

// console.log(food[1][3][1]);







// OBJECTS

// let user = {
//     username: 'johnuser',
//     email: 'john@email.com',
//     password: 'Password123',
//     hobbies: ['Singing', 'Dancing', 'Drawing', 'Jumping'],
//     bestToy: {
//         name: 'Teddy Bear',
//         color: 'White',
//         size: 'medium'
//     }
// }

// console.log(user.bestToy.name);







// LOOPS

// *** FOR LOOPS ***

// let fruits = ['Apple', 'orange', 'Mango', 'Guava'];

// for (let i = 0; i < fruits.length; i++){
//     const fruit = fruits[i];

//     if (fruit == "Banana") {
//         console.log("Banana is found");
//     }else{
//         console.log("No Banana!");
//     }
//     // console.log(fruit);
// }

// This would get the name of the user being searched for...
// let find = prompt("Enter user's name:")


// This is the DB of the users...
// let users = [
//     {
//         user: 'John',
//         age: 31,
//         stateofOrigin: 'Kwara'
//     },
//     {
//         user: 'James',
//         age: 27,
//         stateofOrigin: 'lagos'
//     },
//     {
//         user: 'Peter',
//         age: 42,
//         stateofOrigin: 'Enugu'
//     },
//     {
//         user: 'Paul',
//         age: 29,
//         stateofOrigin: 'Anambra'
//     },
//     {
//         user: 'Philip',
//         age: 37,
//         stateofOrigin: 'Benue'
//     },
// ]

// // This holds the result of the loop...
// let result = false;

// // This is to loop through al the users in search of the particular user...
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
    
//     if (user.user == find) {
//         let sentence = `Hi! my name is ${user.user}, I am ${user.age} years old, and I come from ${user.stateofOrigin} state.`;
//         result = sentence;
//     }
// }

// // Then we check what's inside the result gotten from the loop and give an output...
// if (result == false) {
//     console.log('User not found!');
// }else{
//     console.log(result);
// }



// *** WHILE LOOP ***

// let count = 1;

// while (count <= 100) {
//     // let even;
//     // let odd;

//     if (count%2 != 0 && count%3 != 0) {
//         console.log(count);
//     }

//     // console.log(i);

//     count++;
// }

// console.log(10%7);



// *** DO WHILE LOOP ***

// let i = 1;
// do {
//     console.log(i);

//     i++
// } while (i < 5);



// alert, prompt, confirm...

// alert("Working");
// let conf = confirm("Do you want to be redirected?");
// let firstname = prompt("Enter  your First Name:");
// console.log(`Hello ${firstname}!`);

// if (conf) {
//     document.location.href = "https://www.w3school.com";
// }


function multiply(x, y) {
    let multi = x * y;

    console.log(multi);
    // return multi;
}

// let multiplied = multiply(2, 8);

// console.log(multiplied);