document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions');
    const totalQuestions = 52; // Total number of questions
    const generatedQuestions = new Set();
    let lastQuestion = null; // To track the last generated question

    while (generatedQuestions.size < totalQuestions) {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const question = `${num1} + ${num2}`;
        const reverseQuestion = `${num2} + ${num1}`; // Reverse question

        // Check for duplicates and adjacent similarity
        if (!generatedQuestions.has(question) && !generatedQuestions.has(reverseQuestion) && question !== lastQuestion) {
            generatedQuestions.add(question);
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            questionElement.innerHTML = `${question} = <span class="answer"></span>`;
            questionsContainer.appendChild(questionElement);
            lastQuestion = question; // Update the last question
        }
    }
});