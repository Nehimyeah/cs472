/*global console require process*/
"use strict";


const readline = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

readline.question("What is your name? ", function (answer) {
    console.log(`Welcome ${answer}!`);
    readline.question("How old are you? ", function(age) {
        parseInt(age) > 16 ?
        (console.log("You're allowed to" +
            "get a drivers license in Iowa")) :
            (console.log("You're not allowed ot drive in Iowa"));
        readline.close();
    });
});