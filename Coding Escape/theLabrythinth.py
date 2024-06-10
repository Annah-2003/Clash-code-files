import sys

# Function to perform depth-first search (DFS) traversal in the maze
def dfs(maze, visited, R, C, KR, KC, control_room, path):
    # Mark the current cell as visited
    visited[KR][KC] = True
    path.append((KR, KC))

    # If Rick reaches the control room, return  true
    if (KR, KC) == control_room:
        return True

    # Define possible movements: UP, DOWN, LEFT, RIGHT
    movements = [(0, 1), (0, -1), (-1, 0), (1, 0)]
    for dr, dc in movements:
        nr, nc = KR + dr, KC + dc
        if 0 <= nr < R and 0 <= nc < C and not visited[nr][nc] and maze[nr][nc] != '#':
            if dfs(maze, visited, R, C, nr, nc, control_room, path):
                return True

    # If no valid movements are available, backtrack
    path.pop()
    return False

# Function to find the shortest path from start to end using DFS
def find_shortest_path_dfs(maze, R, C, start, end):
    visited = [[False] * C for _ in range(R)]
    path = []
    dfs(maze, visited, R, C, start[0], start[1], end, path)
    return path

# Function to find the next valid move for Rick
def find_next_move(maze, R, C, KR, KC, visited):
    # Define possible movements: UP, DOWN, LEFT, RIGHT
    movements = [(0, 1), (0, -1), (-1, 0), (1, 0)]
    for dr, dc in movements:
        nr, nc = KR + dr, KC + dc
        if 0 <= nr < R and 0 <= nc < C and not  visited[nr][nc] and maze[nr][nc] != '#':
            return dr, dc
    return None

# Initialization
R, C, A = map(int, input().split())
maze = [input() for _ in range(R)]

# Find Rick's starting position and the control room position
for i in range(R):
    for j in range(C):
        if maze[i][j] == 'T':
            start_position = (i, j)
        elif maze[i][j] == 'C':
            control_room = (i, j)

# Maze traversal to find the control room
visited = [[False] * C for _ in range(R)]
path_to_control_room = find_shortest_path_dfs(maze, R, C, start_position, control_room)

# Deactivate tracker beam and return to starting position
if path_to_control_room:
    print("RIGHT")
else:
    print("NO_MOVE")

# Game loop
while True:
    KR, KC = map(int, input().split())
    for i in range(R):
        maze[i] = input()
    
    # Deactivated tracker beam, now return to starting position
    if path_to_control_room:
        if (KR, KC) == control_room:
            print("DONE")
            break
        else:
            move = find_next_move(maze, R, C, KR, KC, visited)
            if move:
                dr, dc = move 
                if dr == 0 and dc == 1:
                    print("RIGHT")
                elif dr == 0 and dc == -1:
                    print("LEFT")
                elif dr == -1 and dc == 0:
                    print("UP")
                elif dr == 1 and dc == 0:
                    print("DOWN")
                visited[KR][KC] = True
            else:
                print("NO_MOVE")
    else:
        print("NO_MOVE")  # Still looking for control room
