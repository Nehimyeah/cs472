const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

let sum = 0;
function getNumber() {
    readline.question("Enter a number to find sum or stop to finish: ", (res) => {
        if (res.toLowerCase() !== "stop") {
            sum += +res;
            getNumber();
        } else {
            console.log(`The sum of the entered numbers are: ${sum}`);
            readline.close();
        }
    })
}
getNumber();