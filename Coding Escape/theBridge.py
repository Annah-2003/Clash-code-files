import sys

def get_lane(lane_index):
    return lanes[lane_index]

def can_jump(x, y, s):
    lane = get_lane(y)
    for i in range(1, s+1):
        if x+i < len(lane) and lane[x+i] == '0':
            return False
    return True

def can_move_up(y):
    return y > 0

def can_move_down(y):
    return y < 3

def will_fall(x, y, s):
    lane = get_lane(y)
    for i in range(1, s+1):
        if x+i < len(lane) and lane[x+i] == '0':
            return True
    return False

def safe_to_speed(x, y, s):
    return s < 50 and not will_fall(x, y, s + 1)

def safe_to_slow(x, y, s):
    return s > 1 and not will_fall(x, y, s - 1)

# Read initialization input
m = int(input())  # the amount of motorbikes to control
v = int(input())  # the minimum amount of motorbikes that must survive
lanes = [input() for _ in range(4)]  # L0 to L3 are lanes of the road.

# game loop
while True:
    s = int(input())  # the motorbikes' speed
    bikes = []
    for i in range(m):
        x, y, a = [int(j) for j in input().split()]
        if a == 1:
            bikes.append((x, y, a))

    # Determine the action to take
    action = "WAIT"
    danger_detected = False

    for bike in bikes:
        x, y, a = bike
        
        # Check if we need to jump
        if will_fall(x, y, s):
            danger_detected = True
            if can_jump(x, y, s):
                action = "JUMP"
            elif can_move_up(y) and not will_fall(x, y - 1, s):
                action = "UP"
            elif can_move_down(y) and not will_fall(x, y + 1, s):
                action = "DOWN"
            else:
                action = "SLOW"
            break
        
    if not danger_detected:
        # Check if we can safely speed up
        for bike in bikes:
            x, y, a = bike
            if safe_to_speed(x, y, s):
                action = "SPEED"
                break
            elif safe_to_slow(x, y, s):
                action = "SLOW"

    # Output the chosen action
    print(action)
