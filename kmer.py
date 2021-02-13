KMER = 10

def convert(c):
    if (c == 'A'): return 'C'
    if (c == 'C'): return 'G'
    if (c == 'G'): return 'T'
    if (c == 'T'): return 'A'

base = "ACGT"
x = ""
y = ""

for i in range(KMER):
    x += base[0]

for i in range(KMER):
    y += base[-1]

counter = 1

while (x != y):
    counter += 1
    change_next = True
    for i in range(KMER):
        if (change_next):
            if (x[i] == base[-1]):
                x = x[:i] + convert(x[i]) + x[i+1:]
                change_next = True
            else:
                x = x[:i] + convert(x[i]) + x[i+1:]
                break

print("{} possible combinations".format(counter))

