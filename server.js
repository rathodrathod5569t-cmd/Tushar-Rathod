const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ROOT

app.get("/", (req,res)=>{
res.send("BHAI AI API RUNNING 🚀");
});


// CHAT API

app.post("/chat",(req,res)=>{

let msg = req.body.message.toLowerCase();

let reply = "Samajh gaya bhai 😎";


if(msg.includes("hello") || msg.includes("hi")){
reply = "Hello Bhai 👋";
}

else if(msg.includes("python")){
reply = "Python ek powerful language hai 🔥";
}

else if(msg.includes("html")){
reply = "HTML website banata hai 🌐";
}

else if(msg.includes("css")){
reply = "CSS design karta hai 🎨";
}

else if(msg.includes("javascript")){
reply = "JavaScript smart banata hai ⚡";
}

else if(msg.includes("api")){
reply = "API systems connect karti hai 🔗";
}

else if(msg.includes("ai")){
reply = "AI future hai 🚀";
}

else{
reply = "Mujhe aur sikhaya ja raha hai 😎";
}


res.json({
reply: reply
});

});


app.listen(3000,()=>{
console.log("BHAI AI SERVER RUNNING 🚀");
});
