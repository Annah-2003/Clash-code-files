const n = parseInt(readline()); // the number of temperatures to analyze 
if (n === 0) {
    console.log(0);
}else{
    var inputs = readline().split(' ');
    let closest = parseInt(inputs[0]);

    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
        if (Math.abs(t) < Math.abs(closest) || (Math.abs(t) === Math.abs(closest) && t > closest)) {
            closest = t;
        }
        
        
    }
    console.log(closest);
}