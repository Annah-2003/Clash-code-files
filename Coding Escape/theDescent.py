import sys
import math 

# game loop
while True:
    max_height = -1
    target_index = -1


    for i in range(8):
        mountain_h = int(input()) # represents the height of one mountain.


        # Find the highest mountain
        if mountain_h > max_height:
            max_height = mountain_h
            target_index = i


        # Prin the index of the mountain to fire on
        print(target_index)