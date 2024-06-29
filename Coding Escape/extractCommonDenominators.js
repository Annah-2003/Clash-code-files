function gcd(a,b){
    while (b){
        [a,b] = [b, a%b];
    }
    return a;
}

function lcm(a,b) {
    return (a*b)/ gcd (a,b);
}

function convertFrac(lst){
    // Extract all denominators
    const denominators = lst.map(([_, denom]) => denom);
    // Find the least common multiple
    const commonDenom = denominators.reduce((acc, denom) => lcm (acc, denom), 1)
    // Convert each fraction to have the common denominator
    const result = lst.map(([numer, denom]) => {
        const newNumer = (numer * commonDenom) / denom;
        return `(${newNumer},${commonDenom})`;
      });

    // Join the result into a single string
    return result.join('');
}

//Test the function with the provided example
var lst = [[1,2] [1,3] [1,4]];
console.log(convertFrac(lst)); // Expected output