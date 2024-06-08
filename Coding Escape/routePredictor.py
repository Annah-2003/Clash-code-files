# Mapping of room types to their movement rules
# Each dictionary maps the entry point (TOP, LEFT, RIGHT) to the next position (dx, dy)
room_moves = {
    0: {},
    1: {"TOP": (0, 1), "LEFT": (0, 1), "RIGHT": (0, 1)},
    2: {"LEFT": (1, 0), "RIGHT": (1, 0)},
    3: {"TOP": (-1, 0)},
    4: {"TOP": (1, 0)},
    5: {"LEFT": (0, 1)},
    6: {"RIGHT": (0, 1)},
    7: {"TOP": (0, 1), "RIGHT": (0, 1)},
    8: {"LEFT": (0, 1), "RIGHT": (0, 1)},
    9: {"TOP": (0, 1), "LEFT": (0, 1)},
    10: {"TOP": (-1, 0)},
    11: {"TOP": (1, 0)},
    12: {"RIGHT": (0, 1)},
    13: {"LEFT": (0, 1)},
}

# Read initialization input
import sys
input = sys.stdin.read
data = input().split()

W = int(data[0])
H = int(data[1])
grid = []
index = 2
for _ in range(H):
    row = list(map(int, data[index:index + W]))
    grid.append(row)
    index += W

EX = int(data[index])  # Read the exit X coordinate

# Function to determine the next position
def get_next_position(xi, yi, pos):
    room_type = grid[yi][xi]
    move = room_moves[room_type][pos]
    return xi + move[0], yi + move[1]

# Game loop
while True:
    xi, yi, pos = input().split()
    xi, yi = int(xi), int(yi)
    
    next_x, next_y = get_next_position(xi, yi, pos)
    print(next_x, next_y)
