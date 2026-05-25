const fs = require("fs");


// LOAD MEMORY

function loadMemory(){

return JSON.parse(
fs.readFileSync("memory.json")
);

}


// SAVE MEMORY

function saveMemory(memory){

fs.writeFileSync(
"memory.json",
JSON.stringify(memory,null,2)
);

}


// AUTO LEARN

function autoLearn(userMessage){

let memory = loadMemory();


// CHECK DUPLICATE

let exists =
memory.learnedReplies.find(
item =>
item.question === userMessage
);

if(!exists){

memory.learnedReplies.push({

question:userMessage,

answer:
"Interesting hai bhai 😎 Main seekh raha hoon!"

});

saveMemory(memory);

console.log(
"New reply learned:"
,userMessage
);

}

}


// TEST

autoLearn("khana khaya?");
autoLearn("kya kar rahe ho?");
autoLearn("python sikhao");


console.log("AUTO LEARNING ACTIVE 🚀");
