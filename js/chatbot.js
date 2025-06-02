const chatbot = {
    questions: [
        "Tell me about your skills",
        "What projects have you worked on?",
        "What is your experience with MERN stack?",
        "How many DSA problems have you solved?",
        "What are your contact details?",
        "What technologies do you use?",
        "Are you available for freelance work?",
        "Tell me about your education"
    ],
    answers: {
        "Tell me about your skills": "I'm a Full Stack MERN Developer proficient in MongoDB, Express.js, React.js, and Node.js. I also have experience with HTML, CSS, JavaScript, and various modern web technologies.",
        "What projects have you worked on?": "I've worked on two main projects:\n1. Wanderlust - An Airbnb clone with property listings and booking system\n2. eBookstall - A digital book management platform\nBoth projects showcase my full-stack development capabilities.",
        "What is your experience with MERN stack?": "I have extensive experience with the MERN stack:\n• MongoDB for database management\n• Express.js for backend APIs\n• React.js for frontend development\n• Node.js for server-side operations\nI've built multiple full-stack applications using this technology stack.",
        "How many DSA problems have you solved?": "I've solved over 250+ DSA problems across platforms like LeetCode and GeeksforGeeks, demonstrating my strong problem-solving abilities and algorithmic thinking.",
        "What are your contact details?": "You can reach me through:\n• GitHub: Aravind-Mamidala\n• LinkedIn: aravind-mamidala-785457289\n• Email: Use the contact form on this website",
        "What technologies do you use?": "I work with a wide range of technologies:\n• Frontend: HTML5, CSS3, JavaScript, React.js, Bootstrap\n• Backend: Node.js, Express.js, MongoDB, MySQL\n• Programming: Java, Python, C++, PHP\n• Tools: Git, GitHub, VS Code",
        "Are you available for freelance work?": "Yes, I'm available for freelance projects! I'm particularly interested in web development projects using the MERN stack. Feel free to contact me through the form below to discuss your project.",
        "Tell me about your education": "I'm a passionate developer with a strong educational background in computer science. I continuously enhance my skills through online courses, coding challenges, and practical projects."
    }
};

function createTypingIndicator() {
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    return typing;
}

function formatMessage(text) {
    return text.split('\n').map(line => {
        if (line.startsWith('•')) {
            return `<div class="list-item">${line}</div>`;
        } else if (line.match(/^\d\./)) {
            return `<div class="numbered-item">${line}</div>`;
        }
        return line;
    }).join('<br>');
}

function initChatbot() {
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    chatContainer.innerHTML = `
        <div class="chat-button" onclick="toggleChat()">
            <i class="fas fa-comments"></i>
        </div>
        <div class="chat-window" id="chatWindow">
            <div class="chat-header">
                <h4><i class="fas fa-robot mr-2"></i> Chat with me!</h4>
                <button onclick="toggleChat()" class="close-btn">&times;</button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="chat-message bot-message">
                    Hi there! 👋 I'm Aravind's chatbot assistant. How can I help you today?
                </div>
            </div>
            <div class="chat-questions">
                <p>Choose a question or type your own:</p>
                <div class="questions-list" id="questionsList"></div>
            </div>
        </div>
    `;
    document.body.appendChild(chatContainer);
    
    const questionsList = document.getElementById('questionsList');
    chatbot.questions.forEach(question => {
        const btn = document.createElement('button');
        btn.className = 'question-btn';
        btn.textContent = question;
        btn.onclick = () => handleQuestion(question);
        questionsList.appendChild(btn);
    });
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('show');
    
    // Scroll to bottom when opening
    if (chatWindow.classList.contains('show')) {
        const messagesDiv = document.getElementById('chatMessages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

function handleQuestion(question) {
    const messagesDiv = document.getElementById('chatMessages');
    
    // Add user question
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.textContent = question;
    messagesDiv.appendChild(userMsg);
    
    // Add typing indicator
    const typingIndicator = createTypingIndicator();
    messagesDiv.appendChild(typingIndicator);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    // Simulate typing and add bot response
    setTimeout(() => {
        typingIndicator.remove();
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot-message';
        botMsg.innerHTML = formatMessage(chatbot.answers[question]);
        messagesDiv.appendChild(botMsg);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1500);
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', initChatbot); 