# By joining the iDroid smartphone development team, you have been given the responsibility of developing the contact manager. Obviously, what you were not told is that there are strong technical constraints for iDroid: the system doesn’t have much memory and the processor is as fast as a Cyrix from the 90s...
class TrieNode:
    def __init__(self):
        self.children = {}

class Trie:
    def __init__(self) :
        self.root = TrieNode()
        self.size = 0

        def insert(self,number):
            current_node = self.root
            for digit in number:
                if digit not in current_node.chidren:
                    current_node.children[digit] = TrieNode()
                    self.size += 1
                current_node = current_node.children[digit]

# Read input
import sys
input = sys.stdin.read
data = input().split()

n=int(data[0])
phone_numbers = data[1:]

#Create a Trie and insert all phone numbers
trie = Trie()
for number in phone_numbers:
    trie.insert(number)

#Output the number of elements in the Trie
print(trie.size)