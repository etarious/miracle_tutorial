
let users = [];


/**
 * ========================================
 * THIS IS TO ADD THE USER
 * ========================================
*/

function addUser() {
    // console.log('Add User working!');
    // console.log(users);
    let username = prompt('Enter your username:');
    let email = prompt('Enter your email:');
    let password = prompt('Enter your password');


    let user = {
        username: username,
        email: email,
        password: password
    }

    
    users.push(user);
    // console.log(users);

}



/**
 * ========================================
 * THIS IS TO LOG THE USER
 * ========================================
*/

function logUsers() {
    // console.log('Log User working!');

    let section = document.getElementById('found');

    // console.log(section.innerText);
    // section.innerHTML = "Now I have changed it!";

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        section.innerHTML = section.innerHTML + '<br> Username: ' + user.username + ', Email: ' + user.email + '.';
        
        // console.log(
        //     `Username: ${user.username}, Email: ${user.email}`
        // );
    }
}





/**
 * ========================================
 * THIS IS TO SERCH  FOR A USER
 * ========================================
*/

function searchUser() {
    // console.log('Search User working!');

    let username = prompt("Enter the username:");

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        
        if (username === user.username) {
            // console.log("user found!");
            console.log(
                `Username: ${user.username}, Email: ${user.email}.`
            );
            
        }else{
            console.log("User doesn't exist!");

        }
    }
}