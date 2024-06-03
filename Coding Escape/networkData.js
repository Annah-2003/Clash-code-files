var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level including the getaways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]);// the number of exit getaways 

// storing the links in the array
let links = [];
for (let i = 0; i<L; i++)
    var inputs = readline().split(' ');