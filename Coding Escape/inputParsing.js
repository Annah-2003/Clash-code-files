const n = parseInt(readline());//reads the no. of monkeys
const day = readline();// reads the day of the week
const funkiness = parseFloat(readline());//reads funkiness level

let outputStr // initial output string

// apply funkiness check
if (day === "friday")  {
    outputStr = "funky monkey friday";
    
} else {
    outputStr = "monkey";
}
if (funkiness >= 7) {
    outputStr = outputStr.toUpperCase();
    
}
const result = Array(n).fill(outputStr).join(' ');
console.log(result);