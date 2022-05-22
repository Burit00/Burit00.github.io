import math


def opis_zmiennosci(y,x):
    return -y + math.exp(-x)

def rozwiazanie_scisle(x):
    return x*math.exp(-x)


w4 = [25/216, 0, 1408/2565, 2197/4104, 0.2]
w5 = [16/135, 0, 6656/12825, 28561/56430, -9/50, 2/255]

y0 = 0

x0 = 0
xf = 5

e_max = 1e-8
e_min = 1e-9