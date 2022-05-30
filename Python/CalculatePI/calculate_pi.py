import math

# Script by astroxii @ 2022
# Have fun!

def get_distance(v1: tuple, v2: tuple) -> float:
    a = (abs(v1[0])+abs(v2[0]))
    b = (abs(v1[1])+abs(v2[1]))

    return math.sqrt(math.pow(a, 2) + math.pow(b, 2))


vectors = [(3, 0), (-3, 0), (0, 3), (0, -3)]
approx_pi = 0

for i in range(len(vectors)):
    if i+1 < len(vectors):
        approx_pi += get_distance(vectors[i], vectors[i+1])
    else:
        approx_pi += get_distance(vectors[i], vectors[0])

approx_pi /= 6 #  6 is the absolute distance in the X and Y axis for two vectors.

print(approx_pi)
