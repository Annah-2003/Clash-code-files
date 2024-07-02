import sys
import math

def get_distance(x1, y1, x2, y2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

def get_angle(x1, y1, x2, y2):
    return math.degrees(math.atan2(y2 - y1, x2 - x1))

def clamp(value, min_value, max_value):
    return max(min(value, max_value), min_value)

# Read the number of checkpoints
checkpoints = int(input())
checkpoint_coords = []

# Read checkpoint coordinates
for _ in range(checkpoints):
    checkpoint_x, checkpoint_y = map(int, input().split())
    checkpoint_coords.append((checkpoint_x, checkpoint_y))

# Game loop
while True:
    checkpoint_index, x, y, vx, vy, angle = map(int, input().split())

    target_x, target_y = checkpoint_coords[checkpoint_index]

    desired_angle = get_angle(x, y, target_x, target_y)
    angle_diff = desired_angle - angle
    angle_diff = (angle_diff + 180) % 360 - 180  # Normalize angle to range [-180, 180]
    turn_angle = clamp(angle_diff, -18, 18)
    
    # Adjust thrust based on distance to target
    distance_to_target = get_distance(x, y, target_x, target_y)
    if distance_to_target < 1000:
        thrust = int(200 * (distance_to_target / 1000))  # Reduce thrust as we approach the checkpoint
    else:
        thrust = 200  # Full thrust when far from the checkpoint
    thrust = clamp(thrust, 0, 200)

    # Print command
    print(f"{target_x} {target_y} {thrust}")
