# learning_memory.py - Isko apne bot mein add karo
import json, os, datetime

class BotMemory:
    def __init__(self):
        self.memory_file = "bot_brain.json"
        self.knowledge = self.load_knowledge()
    
    def load_knowledge(self):
        if os.path.exists(self.memory_file):
            with open(self.memory_file, 'r') as f:
                return json.load(f)
        return {"skills": {}, "conversations": [], "code_library": {}}
    
    def learn_skill(self, topic, code_example):
        self.knowledge["skills"][topic] = {
            "code": code_example,
            "learned_at": str(datetime.datetime.now()),
            "uses": 0
        }
        self.save()
    
    def get_skill(self, topic):
        if topic in self.knowledge["skills"]:
            self.knowledge["skills"][topic]["uses"] += 1
            self.save()
            return self.knowledge["skills"][topic]["code"]
        return None
    
    def save(self):
        with open(self.memory_file, 'w') as f:
            json.dump(self.knowledge, f, indent=2)

# Usage in your bot:
memory = BotMemory()
memory.learn_skill("hello_world_python", 'print("Hello World")')

