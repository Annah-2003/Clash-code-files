var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]);// the number of exit getaways 

// storing the links in the array
let links = [];
for (let i = 0; i<L; i++){
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]);
    const N2 = parseInt(inputs[1]);
    links.push([N1, N2]);
}

// Store the gateways in an array
let gateways = [];
for (let i =0; i< E; i++){
    const EI = parseInt(readline()); // index of gateway node 
    gateways.push(EI);
}

// Function to find a server a critical link
for (let i = 0; i < links.length; i++) {
    const [node1, node2] = links[i];
    if (gateways.includes(node1) || gateways.includes(node2)) {
        console.log(`${node1} ${node2}`);
        links.splice(i, 1); // Remove the severed link
        return;
    }
}

// Default action: sever any link (fallback)
const [node1, node2] = links[0];
console.log(`${node1} ${node2}`);
links.splice(0, 1); // Remove the severed link


// Game loop
while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn
    severLink(SI);
}