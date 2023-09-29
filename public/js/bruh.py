colors = ['#C3DCFD', '#8074F6', '#A69EF9', '#5FA5FB', '#378FFA', '#F2F1FE', '#6A4CED']
sizes = ['8px', '12px', '16px', '20px']

for color in range(len(colors)):
    for size in range(len(sizes)):
        print('.a-'+str(color)+'-'+str(size)+"{")
        print("height:",sizes[size],";")
        print("width:",sizes[size],";")
        print("background-color:",colors[color],";")
        print('}')