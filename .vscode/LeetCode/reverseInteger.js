/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Define the 32-bit signed integer range limits
    const MAX_INT = Math.pow(2, 31) - 1; // 2^31 - 1
    const MIN_INT = -Math.pow(2, 31);    // -2^31
    
    // Get the sign of the number
    const sign = x < 0 ? -1 : 1; 
    // Reverse the digits and convert to a number
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

    // Check if the reversed number is within the 32-bit signed integer range
    if (reversed < MIN_INT || reversed > MAX_INT) {
        return 0;
    }
    
    return reversed;
};

// Test cases
console.log(reverse(123));      // Output: 321
console.log(reverse(-123));     // Output: -321
console.log(reverse(120));      // Output: 21
console.log(reverse(0));        // Output: 0
console.log(reverse(1534236469)); // Output: 0 (out of range)
