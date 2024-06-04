import sys
import math

# Function to calculate the distance between two points

def distance (x1, y1, x2, y2):
    return math.sqrt((x2 - x1 ) ** 2 + (y2 - y1) ** 2)

def find_nearest_entity(x,y, entities):
    min_distance = float (' inf')
    nearest_entity = None
    for entity in entities:
        entity_x, entity_y = entity[1] , entity[2]
        dist = distance(x, y, entity_x, entity_y)
        if dist < min_distance:
            min_distance = dist
            nearest_entity = entity
    return nearest_entity

# game loop
while True:
    x, y = [int(i) for i in input().split()]
    human_count = int(input())
    humans = [list(map(int, input().split())) for _ in range(human_count)]
    zombie_count = int(input())
    zombies = [list(map(int, input().split())) for _ in range(zombie_count)]

    # Find nearest human and nearest zombie
    nearest_human = find_nearest_entity(x, y, humans)
    nearest_zombie = find_nearest_entity(x, y, zombies)

    # Decide action based on some criteria (e.g., distance, danger level, etc.)
    if nearest_human and nearest_zombie:
        if distance(x, y, nearest_human[1], nearest_human[2]) < distance(x, y, nearest_zombie[1], nearest_zombie[2]):
            target_x, target_y = nearest_human[1], nearest_human[2]
            print(f"{target_x} {target_y} Saving human!")
        else:
            target_x, target_y = nearest_zombie[1], nearest_zombie[2]
            print(f"{target_x} {target_y} Attacking zombie!")
    elif nearest_human:
        target_x, target_y = nearest_human[1], nearest_human[2]
        print(f"{target_x} {target_y} Saving human!")
    elif nearest_zombie:
        target_x, target_y = nearest_zombie[1], nearest_zombie[2]
        print(f"{target_x} {target_y} Attacking zombie!")
    else:
        print("0 0")  # No humans or zombies, stay put