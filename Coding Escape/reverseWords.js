const sentence = readLine ();

// split the sentence into words , reverse the array of words , and join them back into a string
const reversedSentence = sentence.split (' ').reverse().join(' ');

// output the reversed sentence 
console.log(reversedSentence);