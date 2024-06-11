from collections import defaultdict, deque

def longest_influence_chain(n, relationships):
    # Step 1: Create the graph as an adjacency list
    graph = defaultdict(list)
    in_degree = defaultdict(int)  # To keep track of in-degrees for topological sort
    
    # Read relationships and build the graph
    for x, y in relationships:
        graph[x].append(y)
        in_degree[y] += 1
        if x not in in_degree:
            in_degree[x] = 0

    # Step 2: Topological Sort using Kahn's Algorithm
    queue = deque()
    for node in in_degree:
        if in_degree[node] == 0:
            queue.append(node)
    
    topological_order = []
    while queue:
        current = queue.popleft()
        topological_order.append(current)
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # Step 3: Find the longest path in the DAG
    dist = defaultdict(int)
    max_length = 0
    
    for node in topological_order:
        for neighbor in graph[node]:
            if dist[neighbor] < dist[node] + 1:
                dist[neighbor] = dist[node] + 1
                max_length = max(max_length, dist[neighbor])

    # The result is the longest path length + 1 (to count the starting node)
    return max_length + 1 if max_length > 0 else 1

# Reading the input
n = int(input())  # the number of relationships of influence
relationships = []
for _ in range(n):
    x, y = map(int, input().split())
    relationships.append((x, y))

# Calculating the longest chain of influence
result = longest_influence_chain(n, relationships)
print(result)
