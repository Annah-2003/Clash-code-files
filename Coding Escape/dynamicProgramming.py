from collections import defaultdict,deque

def longest_influence_chain(n, relationships):
    # step 1: create the graph as an adjascency list 
    graph = defaultdict