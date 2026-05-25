const fs = require("fs");

let data = {
learnedReplies:[]
};


// TOPICS

const topics = [

"hello",
"hi",
"kaise ho",
"khana khaya",
"kya kar rahe ho",
"python",
"html",
"css",
"javascript",
"ai",
"love",
"sad",
"motivate",
"study",
"movie",
"music",
"cricket",
"india",
"gaming",
"coding"

];


// REPLIES

const replies = [

"Interesting hai bhai 😎",

"Main seekh raha hoon 🔥",

"Tu mast banda hai 😎",

"Ye mujhe pasand aaya 🚀",

"AI future hai 🤖",

"Python powerful language hai 🐍",

"HTML website banata hai 🌐",

"CSS design karta hai 🎨",

"JavaScript smart banata hai ⚡",

"Tension mat le bhai 💪",

"Roz practice kar 🔥",

"Main tera AI dost hoon 👋"

];




// GENERATE 50000 REPLIES

for(let i=0;i<50000;i++){

let q =
topics[
Math.floor(
Math.random()*topics.length
)
] + " " + i;

let a =
replies[
Math.floor(
Math.random()*replies.length
)
];

data.learnedReplies.push({

question:q,
answer:a

});

}



// SAVE FILE

fs.writeFileSync(
"massive_brain.json",
JSON.stringify(data,null,2)
);

console.log(
"50000 replies generated 🚀"
);

