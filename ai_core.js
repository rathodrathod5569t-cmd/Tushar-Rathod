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


// LEARN NEW REPLY

function learn(question,answer){

let memory = loadMemory();

memory.learnedReplies.push({
question,
answer
});

saveMemory(memory);

console.log("New Knowledge Learned 😎");

}


// GET REPLY

function getReply(message){

let memory = loadMemory();


// CHECK LEARNED REPLIES

for(let item of memory.learnedReplies){

if(
message.toLowerCase()
.includes(
item.question.toLowerCase()
)
){

return item.answer;

}

}


return "Mujhe ye abhi nahi pata bhai 😅";

}



// TEST LEARNING

learn(
"who are you",
"I am BHAI AI 🤖"
);


console.log(
getReply("who are you")
);
