const readline = require("readline");

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readInterface.question("Please enter your name:", name => {
    console.log("Hello", name);
    readInterface.close();
})
