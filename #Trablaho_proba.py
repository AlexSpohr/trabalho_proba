#Trablaho_proba

def combinacao(num, x):   #função calcula a combinação
    y = num - x
    fatnum = 1
    fatx = 1
    faty = 1
    i = 1
    for i in range(num):
        i += 1
        fatnum *= i
    for i in range(x):
        i += 1
        fatx *= i
    for i in range(y):
        i += 1
        faty *= i
    fat_comb = (fatnum) / (faty * fatx)
    return fat_comb


n = int(input("Digite o seu n: "))
p = float(input("Digite o seu p (em decimal): "))
x = int(input("Digite o seu x: "))
q = (1 - p)
print(q)
c = combinacao(n,x)
print(c)

