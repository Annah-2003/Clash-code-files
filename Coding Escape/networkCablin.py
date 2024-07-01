import sys
input = sys.stdin.read

def minimal_optical_fiber_length(buildings):
    x_coords = [x for x , y in buildings]
    y_coords = [y for x , y in buildings]


    min_x = min(x_coords)
    max_x = max(x_coords)

    #Length of main cable
    main_cable_length = max_x - min_x

    #Find the median y co-ordinate
    y_coords.sort()
    n = len(y_coords)
    if n % 2 == 1:
        median_y = y_coords[n // 2]
    else:
        median_y = (y_coords[n // 2] + y_coords[n // 2]) /2

    #Calculate the total vertical distance to the median co-ordinate
    total_vertical_distance = sum(abs(y - median_y) for y in y_coords)

    return main_cable_length + total_vertical_distance

# Read input
data = input().split()
n = int(data[0])
buildings = [(int(data[i*2 + 1]), int(data[i*2 + 2])) for i in range(n)]

# Calculate and print the minimal length of cable required
print(int(minimal_optical_fiber_length(buildings)))


