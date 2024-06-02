const n = parseInt(readline);
const d = parseInt(readline);
const h = parseInt(readline);

// Calculate the total number of hoursneeded to survive 
const totalHoursNeeded = d * 24;

// Calculate the total number of hours the aplles can provide 
// total number
const totalHoursFromApples = n* h ;

if (totalHoursFromApples > totalHoursNeeded) {
    console.log("It is enough");
} else if (totalHoursFromApples === totalHoursNeeded) {
    console.log("Just enough");
} else {
    console.log("Not enough");
}
