from flask import Flask, request, jsonify
import os

app = Flask(__name__)

knowledge = {}

folder = "knowledge"

for file in os.listdir(folder):

    path = os.path.join(folder, file)

    with open(path, "r") as f:

        knowledge[file.replace(".txt", "")] = f.read()

@app.route("/ai", methods=["POST"])
def ai():

    data = request.json
    message = data.get("message").lower()

    if "python" in message:
        reply = knowledge["python"]

    elif "java" in message:
        reply = knowledge["java"]

    elif "c++" in message:
        reply = knowledge["cpp"]

    else:
        reply = "Mujhe abhi ye nahi pata 😅"

    return jsonify({
        "reply": reply
    })

app.run(host="0.0.0.0", port=5000)
