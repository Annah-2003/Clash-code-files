import sys
import math

def get_distance(x1, y1, x2, y2):
    return math.sqrt((x2-x1) **2 + (y2-y1)**2)

def get_angle(x1, y1, x2, y2):
    return math.degrees(math.atan2(y2-y1, x2 - x1))

def clamp