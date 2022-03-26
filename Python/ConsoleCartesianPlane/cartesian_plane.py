import random
from operator import itemgetter

# Script by astroxii @ 2022
# Have fun!


def get_random_tuples(amount: int):

    tuples = []

    for i in range(0, amount):
        x = random.randrange(0+i, (i+1)*5, 1)
        y = random.randrange(0+i, (i+1)*2, 1)
        tuples.append((x, y))

    return tuples


def display_cartesian_plane(coords: list):

    plane = []
    width = max(coords)[0]
    height = max(coords, key=itemgetter(1))[1]

    print(width, height)

    for i in range(0, height+2):
        plane.append([])
        for j in range(0, width+2):
            if (j, i) in coords:
                plane[i].append(" @ ")
            else:
                plane[i].append(" * ")

    display = ""

    for i in range(0, len(plane)):
        display += f"\n{i} "
        for col in plane[i]:
            display += col

    display += "\n  "

    for i in range(0, len(plane[i])):
        display += f" {i%10} "

    print(display)

