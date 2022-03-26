def log(content):
    with open("keylogs.log", "a") as file:
        file.write(f'{str(content)} ')
        file.close()

