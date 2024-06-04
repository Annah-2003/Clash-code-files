import sys
import math

# Function to calculate the distance between two points
def distance(x1, y1, x2, y2):
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

def find_nearest_entity(x, y, entities):
    min_distance = float('inf')
    nearest_entity = None
    for entity in entities:
        entity_x, entity_y = entity[1], entity[2]
        dist = distance(x, y, entity_x, entity_y)
        if dist < min_distance:
            min_distance = dist
            nearest_entity = entity
    return nearest_entity

# game loop
while True:
    try:
        x, y = [int(i) for i in input().strip().split()]
    except ValueError:
        print("Invalid input for coordinates. Exiting.")
        break

    try:
        human_count = int(input().strip())
    except ValueError:
        print("Invalid input for human count. Exiting.")
        break

    humans = []
    for _ in range(human_count):
        try:
            human = list(map(int, input().strip().split()))
            if len(human) != 3:
                raise ValueError("Each human entry must contain exactly 3 integers.")
            humans.append(human)
        except ValueError:
            print("Invalid input for humans. Exiting.")
            break

    try:
        zombie_count = int(input().strip())
    except ValueError:
        print("Invalid input for zombie count. Exiting.")
        break

    zombies = []
    for _ in range(zombie_count):
        try:
            zombie = list(map(int, input().strip().split()))
            if len(zombie) != 3:
                raise ValueError("Each zombie entry must contain exactly 3 integers.")
            zombies.append(zombie)
        except ValueError:
            print("Invalid input for zombies. Exiting.")
            break

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
        # No humans or zombies nearby
        # Check if there are any humans at all
        if humans:
            nearest_human = humans[0]  # Choose the first human
            target_x, target_y = nearest_human[1], nearest_human[2]
            print(f"{target_x} {target_y} Saving human!")
        else:
            print("0 0")  # No humans or zombies, stay put
