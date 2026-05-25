from learning_memory import BotMemory
from code_generator import CodeGenerator
from self_upgrade import SelfUpgrade
from bot_internet import BotInternet

memory = BotMemory()
coder = CodeGenerator(memory)
upgrade = SelfUpgrade()
internet = BotInternet()

print("🤖 Tushar Advanced AI Started!")

while True:

    cmd = input("\nYou: ")

    if cmd == "exit":
        break

    elif cmd == "evolve":
        print(upgrade.evolve())

    elif cmd.startswith("learn "):

        topic = cmd.replace("learn ", "")

        code = input("Code: ")

        memory.learn_skill(topic, code)

        print("✅ Learned!")

    elif cmd.startswith("get "):

        topic = cmd.replace("get ", "")

        result = memory.get_skill(topic)

        print(result)

    elif cmd.startswith("website "):

        name = input("Website Name: ")
        color = input("Color: ")

        html = coder.generate_website(name, color)

        print(html)

    elif cmd.startswith("function "):

        purpose = input("Purpose: ")

        fname, code = coder.create_new_function(purpose)

        print(code)

    else:
        print("🤔 Unknown command")
