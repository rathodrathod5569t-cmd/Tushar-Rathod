const fs = require("fs");

function saveMemory(data){

let memory = JSON.parse(
fs.readFileSync("memory.json")
);

memory.memories.push(data);

fs.writeFileSync(
"memory.json",
JSON.stringify(memory,null,2)
);

console.log("Memory Saved 😎");

}

saveMemory("BHAI AI started learning");

