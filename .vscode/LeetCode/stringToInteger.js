/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // Constants for 32-bit signed integer range
    const MAX_INT = 2**31 - 1; // 2147483647
    const MIN_INT = -(2**31);  // -2147483648
    
    // Step 1: Trim any leading whitespaces
    let i = 0;
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    // Step 2: Check for optional '+' or '-' sign
    let sign = 1;
    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }
    
    // Step 3: Convert digits into the number
    let result = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';  // Get the numeric value of the current digit
        result = result * 10 + digit;
        
        // Step 4: Check for overflow/underflow conditions
        if (result * sign > MAX_INT) return MAX_INT;
        if (result * sign < MIN_INT) return MIN_INT;
        
        i++;
    }
    
    // Step 5: Return the final result with the correct sign
    return result * sign;
};

// Test cases
console.log(myAtoi("42"));            // Output: 42
console.log(myAtoi("   -42"));        // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
console.log(myAtoi("words and 987")); // Output: 0
console.log(myAtoi("-91283472332"));  // Output: -2147483648 (clamped to MIN_INT)
console.log(myAtoi("91283472332"));   // Output: 2147483647 (clamped to MAX_INT)
