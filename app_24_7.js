// UPDATED app.js for 24/7 Server Deployment

class BhaiAI {
    constructor() {
        this.serverUrl = localStorage.getItem('serverUrl') || 'http://localhost:3000';
        this.useLocalBrain = true;
    }

    async askServer(question) {
        try {
            const response = await fetch(`${this.serverUrl}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: question })
            });

            const data = await response.json();
            return data.reply;

        } catch (e) {
            return null;
        }
    }

    knowledgeBase = {
        'hello': 'Namaste bhai! 🙏',
        'hi': 'Haan bhai bol! 💪',
        'kaise ho': 'Mast hoon bhai!',
        'python kya hai': 'Python ek programming language hai 🐍',
        'ai kya hai': 'AI = Artificial Intelligence 🤖',
        'joke': 'Santa bola: Mere paas dimaag hai, lekin use nahi karta 😂'
    };

    findAnswer(input) {
        const lower = input.toLowerCase();

        for (let key in this.knowledgeBase) {
            if (lower.includes(key)) {
                return this.knowledgeBase[key];
            }
        }

        return null;
    }

    async process(input) {

        const serverAnswer = await this.askServer(input);

        if (serverAnswer) return serverAnswer;

        const localAnswer = this.findAnswer(input);

        if (localAnswer) return localAnswer;

        return "Bhai mujhe iska answer nahi pata 😅";
    }
}

const ai = new BhaiAI();

const chatDisplay = document.getElementById('chatDisplay');
const userInput = document.getElementById('userInput');

async function sendMessage() {

    const text = userInput.value.trim();

    if (!text) return;

    showMessage(text, 'user');

    userInput.value = '';

    const response = await ai.process(text);

    showMessage(response, 'ai');
}

function showMessage(text, type) {

    const div = document.createElement('div');

    div.className = `message ${type}-message`;

    div.innerHTML = text;

    chatDisplay.appendChild(div);

    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
