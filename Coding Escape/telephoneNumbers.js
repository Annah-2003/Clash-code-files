class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0; // to count how many numbers pass through this node
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(number) {
        let current = this.root;
        for (let char of number) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
            current.count++;
        }
    }
    
    countUniqueElements() {
        let total = 0;
        function traverse(node) {
            if (!node) return;
            total += node.count;
            for (let child in node.children) {
                traverse(node.children[child]);
            }
        }
        traverse(this.root);
        return total;
    }
}

function countItemsToStore(N, numbers) {
    const trie = new Trie();
    for (let number of numbers) {
        trie.insert(number);
    }
    return trie.countUniqueElements();
}

// Reading input
const N = parseInt(readline());
const numbers = [];
for (let i = 0; i < N; i++) {
    const telephone = readline().trim();
    numbers.push(telephone);
}

// Output the result
console.log(countItemsToStore(N, numbers));
