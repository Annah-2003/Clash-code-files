class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_number = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
        self.node_count = 0
    
    def insert(self, number):
        current_node = self.root
        for digit in number:
            if digit not in current_node.children:
                current_node.children[digit] = TrieNode()
                self.node_count += 1
            current_node = current_node.children[digit]
        current_node.is_end_of_number = True

# Read input
import sys
input = sys.stdin.read
data = input().split()

N = int(data[0])
phone_numbers = data[1:N+1]

# Create a trie and insert phone nummbers
trie = Trie()
for number in phone_numbers:
    trie.insert(number)

# Output the number of nodes in the trie
print(trie.node_count)
