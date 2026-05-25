# code_generator.py
import random

class CodeGenerator:
    def __init__(self, memory):
        self.memory = memory
        self.templates = {
            "web": ["html", "css", "js"],
            "app": ["python", "java", "kotlin"],
            "script": ["bash", "python"]
        }
    
    def generate_website(self, name, color):
        html = f"""<!DOCTYPE html>
<html>
<head><title>{name}</title><style>
body{{background:{color};font-family:Arial}}
</style></head>
<body><h1>Welcome to {name}</h1></body>
</html>"""
        self.memory.learn_skill(f"website_{name}", html)
        return html
    
    def create_new_function(self, purpose):
        # Bot khud function likhega
        func_name = f"auto_func_{random.randint(1000,9999)}"
        code = f"""def {func_name}():
    # Purpose: {purpose}
    print("Executing: {purpose}")
    return "Done"
"""
        self.memory.learn_skill(func_name, code)
        return func_name, code

