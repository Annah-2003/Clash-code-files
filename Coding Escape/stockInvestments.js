const n = parseInt(readline());
const values = readline().split(' ').map(Number);

let maxLoss = 0;
let maxValue = values[0];

for (let i = 0; i < n; i++) {
    const currentValue = values[i];
    


//calculate potential loss
const potentialLoss = maxValue - currentValue;

//update maxLoss if we found a bigger loss
if (potentialLoss > maxLoss) {
    maxLoss = potentialLoss
}

// Update maxValue if the currentValue is higher than  the maxValue 
if (currentValue > maxValue){
    maxValue = currentValue
}
}
console.log(maxLoss === 0? 0 : - maxLoss);
