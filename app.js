
# File 2: app.js - The AI Brain (Complete knowledge base + Gemini API integration)

js_code = '''// BHAI KA AI REMOTE - Complete JavaScript
// Har cheez ka jawab, Hindi + English, Fatafat!

class BhaiAI {
    constructor() {
        this.geminiApiKey = localStorage.getItem('geminiKey') || '';
        this.useLocalBrain = true; // Local brain for instant answers
        this.chatHistory = [];
        this.init();
    }
    
    init() {
        // Check if API key is set
        if (!this.geminiApiKey) {
            this.showApiKeyPrompt();
        }
    }
    
    showApiKeyPrompt() {
        const key = prompt(`🔑 Bhai, Gemini API Key daal de!\n\n1. Google AI Studio pe jao: https://aistudio.google.com/app/apikey\n2. "Create API Key" dabao\n3. Key copy karke yahan paste karo\n\n(Nahi hai toh "skip" likh do - local brain chalega)`);
        
        if (key && key.toLowerCase() !== 'skip') {
            this.geminiApiKey = key.trim();
            localStorage.setItem('geminiKey', this.geminiApiKey);
            this.showMessage('✅ API Key set ho gayi! Ab aur bhi tez jawab milega!', 'ai');
        } else {
            this.showMessage('👍 Thik hai bhai! Local brain se kaam chalega. API key baad mein bhi daal sakta hai.', 'ai');
        }
    }
    
    // ========== LOCAL AI BRAIN (Instant Answers) ==========
    
    knowledgeBase = {
        // Greetings
        'hello': 'Namaste bhai! Kya haal hai? Kuchh bhi puchh sakta hai tu! 🙏',
        'hi': 'Haan bhai bol! Main taiyaar hoon! 💪',
        'namaste': 'Namaste bhai! Kya puchhna hai aaj?',
        'kaise ho': 'Main toh mast hoon bhai! Tu bata?',
        'kya haal hai': 'Sab badhiya bhai! Tu bata kya chahiye?',
        
        // General Knowledge
        'india ka capital': 'India ka capital **New Delhi** hai bhai! 🇮🇳',
        'capital of india': 'Capital of India is **New Delhi** bhai! 🇮🇳',
        'india ke kitne states': 'India mein **28 states** aur **8 Union Territories** hain bhai!',
        'india ki population': 'India ki population lagbhag **140 crore** (1.4 billion) hai bhai! 🌍',
        'india ka pm': 'India ke PM **Narendra Modi** hain bhai!',
        'india ka president': 'India ke President **Droupadi Murmu** hain!',
        
        // Science
        'water ka formula': 'Water ka formula **H₂O** hai bhai - 2 Hydrogen, 1 Oxygen! 💧',
        'sun kya hai': 'Sun ek **star** hai bhai! Solar system ka sabse bada! 🔥',
        'earth ke kitne continents': 'Earth pe **7 continents** hain: Asia, Africa, North America, South America, Antarctica, Europe, Australia! 🌍',
        'gravity kya hai': 'Gravity wo force hai jo sabko **neeche khinchti** hai bhai! Newton ne apple girte dekha tha! 🍎',
        'speed of light': 'Light ki speed **299,792 km/second** hai bhai! Tez hai na? ⚡',
        'dna kya hai': 'DNA = **Deoxyribonucleic Acid**. Ye life ka blueprint hai - har cheez ka code ismein hai! 🧬',
        
        // Tech
        'python kya hai': 'Python ek **programming language** hai bhai! Easy hai, powerful hai, AI mein bahut use hoti hai! 🐍',
        'javascript kya hai': 'JavaScript web pages ko **alive** banati hai bhai! Website mein animation, button sab isse chalta hai! 💻',
        'ai kya hai': 'AI = **Artificial Intelligence**. Computer ko dimaag dene wali technology! Main bhi AI hoon! 🤖',
        'internet kya hai': 'Internet = **Interconnected Networks**. Poore duniya ke computers connected hain! 🌐',
        'blockchain kya hai': 'Blockchain ek **digital ledger** hai jismein records permanently store hote hain. Crypto ka base hai! ⛓️',
        
        // History
        'gandhi kaun': 'Mahatma Gandhi - **Father of Nation**! Non-violence se India ko azaadi dilayi! 🇮🇳',
        'taj mahal kahan': 'Taj Mahal **Agra, India** mein hai bhai! Shah Jahan ne Mumtaz ke liye banwaya tha! 🕌',
        'world war 2': 'WW2 **1939-1945** chala bhai! Germany, Japan vs Allies. Atomic bomb bhi gira! 💣',
        'independence day': 'India **15 August 1947** ko azaad hua bhai! 🎆',
        'republic day': 'Republic Day **26 January 1950** ko aaya jab Constitution launch hua! 📜',
        
        // Bollywood
        'shahrukh khan': 'SRK = **King Khan**! DDLJ, K3G, Pathan - sab hit! 🎬',
        'amitabh bachchan': 'Big B! Bollywood ke **Shahenshah**! Don, Sholay, Deewar - legendary! 🌟',
        'dangal': 'Dangal mein Aamir Khan ne **Geeta-Babita** ki real story batayi! Wrestling pe based hai! 🤼',
        '3 idiots': '3 Idiots - **"Aal izz well"**! Engineering life pe best movie! Rancho ne system hilaya! 🎓',
        
        // Sports
        'cricket kya hai': 'Cricket = **bat-ball** game bhai! India ka jaan hai! 11 players, 2 teams! 🏏',
        'virat kohli': 'Virat = **King Kohli**! Run machine, chase master! 🏆',
        'ms dhoni': 'Dhoni = **Captain Cool**! 2007 T20, 2011 ODI World Cup jeetaya! 🏏',
        'fifa world cup': 'Football ka sabse bada tournament! **4 saal** mein ek baar! ⚽',
        'olympics': 'Olympics **har 4 saal** mein hote hain! Summer + Winter! 🥇',
        
        // Food
        'biryani': 'Biryani = **Rice + Meat + Masala** = Heaven! Hyderabadi sabse best! 🍚',
        'pani puri': 'Pani Puri = **Golgappe**! Paani mein dubo ke khao, maza aa jaye! 🥟',
        'samosa': 'Samosa = **Aloo + Maida** ka triangle! Chutney ke saath best! 🥟',
        
        // Random Fun
        'joke': 'Bhai ek joke sun: Santa ne Banta se pucha "Tere paas dimaag hai?" Banta bola "Haan, lekin use nahi karta, rent pe diya hai!" 😂',
        'joke sunao': 'Teacher: "Batao cow kaunsi language bolti hai?"\nStudent: "Madam, wo toh **Moo** bolti hai!" 😄',
        'shayari': 'Zindagi ek safar hai suhana,\nYahan kal kya ho kisne jaana!\nHaste raho, muskurate raho,\nKyunki Bhai ka AI tumhare saath hai! ✨',
        'motivation': 'Bhai tu **king** hai! Kuchh bhi kar sakta hai! Bas focus rakh, mehnat kar, result milega! 💪🔥',
        
        // Time & Date
        'time kya': `Abhi ka time: **${new Date().toLocaleTimeString('en-IN')}** bhai! ⏰`,
        'date kya': `Aaj ki date: **${new Date().toLocaleDateString('en-IN')}** bhai! 📅`,
        'aaj ka din': `Aaj **${new Date().toLocaleDateString('en-IN', {weekday:'long'})}** hai bhai!`,
        
        // Help
        'help': '**Main kya kar sakta hoon:**\n\n✅ General Knowledge\n✅ Science & Tech\n✅ History & Geography\n✅ Bollywood & Sports\n✅ Jokes & Shayari\n✅ Time & Date\n✅ Calculations\n✅ Definitions\n\n**Bas puchh bhai!** Kuchh bhi! 🚀',
        'kya kar sakta': 'Main **har cheez** ka jawab de sakta hoon bhai! Science, History, Tech, Jokes, News - sab! Puchh ke dekh! 😎',
        'tum kaun ho': 'Main **Bhai Ka AI** hoon! Tera dost, tera guide, tera encyclopedia! Kuchh bhi puchh! 🤖',
    };
    
    // Smart matching function
    findAnswer(input) {
        const lower = input.toLowerCase().trim();
        
        // Direct match
        for (let key in this.knowledgeBase) {
            if (lower.includes(key)) {
                return this.knowledgeBase[key];
            }
        }
        
        // Calculator
        if (this.isMath(lower)) {
            return this.solveMath(lower);
        }
        
        // Time queries
        if (lower.includes('time') || lower.includes('samay') || lower.includes('waqt')) {
            return `Abhi ka time: **${new Date().toLocaleTimeString('en-IN')}** bhai! ⏰`;
        }
        if (lower.includes('date') || lower.includes('tarikh') || lower.includes('din')) {
            return `Aaj ki date: **${new Date().toLocaleDateString('en-IN', {weekday:'long', year:'numeric', month:'long', day:'numeric'})}** bhai! 📅`;
        }
        
        // Weather (simulated)
        if (lower.includes('weather') || lower.includes('mausam') || lower.includes('temperature')) {
            return `Weather ke liye exact location batao bhai! Ya phir online check karo: **weather.com** 🌤️`;
        }
        
        // No match found
        return null;
    }
    
    isMath(input) {
        const mathPattern = /^[\d\s\+\-\*\/\%\(\)\.\,]+$/;
        const hasNumbers = /\d/.test(input);
        const hasOperators = /[\+\-\*\/\%]/.test(input);
        return hasNumbers && hasOperators;
    }
    
    solveMath(input) {
        try {
            // Clean and evaluate
            const clean = input.replace(/[^\d\+\-\*\/\%\(\)\.\s]/g, '');
            const result = Function('"use strict"; return (' + clean + ')')();
            return `**${clean.trim()} = ${result}** bhai! 🧮`;
        } catch {
            return 'Bhai calculation samajh nahi aayi! Phir se likh de! 🤔';
        }
    }
    
    // ========== GEMINI API (Advanced Answers) ==========
    
    async askGemini(question) {
        if (!this.geminiApiKey) return null;
        
        try {
            const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + this.geminiApiKey;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are "Bhai Ka AI" - a friendly Indian AI assistant. Rules:
1. Reply in SHORT (2-3 sentences max)
2. Use Hinglish (Hindi + English mix) when user asks in Hindi
3. Be friendly, use "bhai" sometimes
4. Give accurate, helpful answers
5. If you don't know, say "Bhai ye mujhe exact nahi pata, par..."

User question: ${question}`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 150
                    }
                })
            });
            
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
        } catch (e) {
            console.error('Gemini error:', e);
            return null;
        }
    }
    
    // ========== MAIN PROCESS ==========
    
    async process(input) {
        // 1. Try local brain first (instant)
        const localAnswer = this.findAnswer(input);
        if (localAnswer) return localAnswer;
        
        // 2. Try Gemini API (if available)
        if (this.geminiApiKey) {
            const geminiAnswer = await this.askGemini(input);
            if (geminiAnswer) return geminiAnswer;
        }
        
        // 3. Fallback smart response
        return this.smartFallback(input);
    }
    
    smartFallback(input) {
        const fallbacks = [
            `Bhai "${input}" ke baare mein detail mein nahi jaanta, par tu Google pe check kar sakta hai! 🔍`,
            `Ye sawal thoda alag hai bhai! Main seekh raha hoon. Kuchh aur puchh! 🎓`,
            `Interesting sawal hai bhai! Ispe main research karunga. Abhi ke liye kuchh aur puchh le! 🤔`,
            `Bhai ye mujhe exact nahi pata! Lekin main hamesha improve hota rehta hoon! 💪`,
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
}

// ========== UI CONTROLLER ==========

const ai = new BhaiAI();
const chatDisplay = document.getElementById('chatDisplay');
const userInput = document.getElementById('userInput');
const typingIndicator = document.getElementById('typingIndicator');
const voiceBtn = document.getElementById('voiceBtn');

let recognition = null;

// Speech Recognition setup
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'hi-IN';
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
        voiceBtn.classList.remove('recording');
        sendMessage();
    };
    
    recognition.onerror = () => {
        voiceBtn.classList.remove('recording');
        showMessage('Voice sunne mein dikkat hui bhai! Phir se try karo! 🎤', 'ai');
    };
    
    recognition.onend = () => {
        voiceBtn.classList.remove('recording');
    };
}

function toggleVoice() {
    if (!recognition) {
        showMessage('Bhai, tera browser voice support nahi karta! Chrome use karo! 🎤', 'ai');
        return;
    }
    
    if (voiceBtn.classList.contains('recording')) {
        recognition.stop();
        voiceBtn.classList.remove('recording');
    } else {
        recognition.start();
        voiceBtn.classList.add('recording');
    }
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    
    // Show user message
    showMessage(text, 'user');
    userInput.value = '';
    
    // Show typing
    typingIndicator.style.display = 'block';
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
    
    // Get AI response
    const response = await ai.process(text);
    
    // Hide typing and show response
    typingIndicator.style.display = 'none';
    showMessage(response, 'ai');
    
    // Text to speech (optional)
    speak(response);
}

function showMessage(text, type) {
    const div = document.createElement('div');
    div.className = `message ${type}-message`;
    div.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    
    // Remove welcome message if exists
    const welcome = chatDisplay.querySelector('.welcome-msg');
    if (welcome) welcome.remove();
    
    chatDisplay.appendChild(div);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function quickAsk(question) {
    userInput.value = question;
    sendMessage();
}

function speak(text) {
    if ('speechSynthesis' in window) {
        // Remove markdown for speech
        const cleanText = text.replace(/\*\*/g, '').replace(/[⏰📅🌍🔥💪🚀😎🎓🤔🔍🎤]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'hi-IN';
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

// Auto-focus input
userInput.focus();

console.log('🎮 Bhai Ka AI Remote ready!');
'''

with open('/mnt/agents/output/app.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print("✅ app.js ban gaya!")
