function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const currentDisplay = window.getComputedStyle(chatWindow).display;
    chatWindow.style.display = currentDisplay === 'none' ? 'flex' : 'none';
}

function refreshChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = `
      <div class="message bot-message">
        Hi! How can I help you today?
      </div>
    `;
  }

// Predefined responses for each option
const responses = {
    'Academic Background': "Sakalya Mitra's Educational Background \n- Currently pursuing Integrated M.Tech. in Artificial Intelligence (CSE) at VIT Bhopal University (final-year)\n- Maintains a CGPA of 9.59/10\n- Among top 0.5% students of his batch",
    
    'Skills': "Sakalya has experience in Python, TensorFlow, PyTorch, ML, DL and NLP",
    
    'Work Experience': "Here's Sakalya Mitra's work experience:\n\nCurrent Role:\nNLP Intern at FutureSmart AI (February 2024 - Present)\n- He developed NL2SQL chatbots handling million+ record datasets for international projects\n- He optimized LangChain/Llama-Index pipeline, reducing response time from 15 to 5 seconds\n- He implemented FastAPI endpoints with Google Auth serving 10,000+ users\n\nPrevious Role:\nData Science Intern at Scaler (July 2022 - April 2024)\n- He led curriculum development that improved student engagement by 50%\n- He created 400+ questions and 3+ projects for Advanced Data Science Course\n- He developed learning modules reducing Help Requests by 25%\n- He consistently ranked among top performers among 10+ interns\n- He managed the entire Beginner and Intermediate Data Science segments",
    
    'Projects': "Sakalya has done a variety of projects. Some of his notable projects are:\n1. AutoTabML: An automated ML code generation tool for tabular data\nCheck it here: https://github.com/Sakalya100/AutoTabML\n\n2. Search-Viz: AI Search Algorithms Visualizer\nCheck it here: https://github.com/Sakalya100/Search-Viz\n\n3. Research-Buddy: Real-time research paper finder and summarizer\nCheck it here: https://github.com/Sakalya100/Research-Buddy\n\n4. MediInsight: Disease diagnosis solution using ML/DL\nCheck it here: https://github.com/Sakalya100/MediInsight\n\nThese projects demonstrates his expertise across various domains including Machine Learning and Deep Learning, Natural Language Processing, Web Development, Computer Vision, DevOps and Cloud Technologies."
};

// Add event listeners for option buttons
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
        const message = this.textContent;
        const messagesContainer = document.querySelector('.chat-messages');
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);
        
        // Add bot response with predefined answer
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            // Get predefined response or use a default message if not found
            botMessage.textContent = responses[message] || "Thank you for your message. Someone will respond shortly.";
            messagesContainer.appendChild(botMessage);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 500);
    });
});