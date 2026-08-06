const questions = [
    {
        question: "Which language is used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "JavaScript"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<img>", "<a>", "<link>", "<p>"],
        answer: "<a>"
    },
    {
        question: "Which CSS property changes the text color?",
        options: ["background-color", "font-size", "color", "border"],
        answer: "color"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of these"],
        answer: "All of these"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "splice()"],
        answer: "pop()"
    },
    {
        question: "Which loop is best for iterating over every element of an array?",
        options: ["while", "do...while", "forEach()", "switch"],
        answer: "forEach()"
    },
    {
        question: "Which DOM method selects an element by its ID?",
        options: [
            "querySelectorAll()",
            "getElementById()",
            "getElementsByClassName()",
            "createElement()"
        ],
        answer: "getElementById()"
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["method", "define", "function", "class"],
        answer: "function"
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: ["mouseover", "keydown", "click", "submit"],
        answer: "click"
    }
];
let currentQuestion = 0;
let score = 0;
const scoreContent = document.getElementById('score');

//Question Number
function display() {
    const optionDiv = document.getElementById('options');
    optionDiv.innerHTML = "";
    const questionNumber = document.getElementById("questionNumber");
    questionNumber.textContent = `Question${currentQuestion + 1}/10`;

    //question
    const question = document.getElementById('question');
    question.textContent = questions[currentQuestion].question;

    questions[currentQuestion].options.forEach((option, index) => {
        const inputradio = document.createElement('input');
        inputradio.type = 'radio';
        inputradio.value=option;
        inputradio.name="user-option";

        const label = document.createElement('label');
        label.textContent = questions[currentQuestion].options[index];
        optionDiv.append(inputradio, label);


    })
}
display();

const nextButton = document.getElementById('nextQuestion');
nextButton.addEventListener('click', () => {
    const checkedOption=document.querySelector('input[name="user-option"]:checked');
    if(!checkedOption)
    {
        return;
    }
    if (checkedOption.value== questions[currentQuestion].answer) {
        score++;
    }
    scoreContent.textContent = `Score : ${score}`;
    currentQuestion++;
    if(currentQuestion>=questions.length)
    {
        const box =document.querySelector('.quiz');
        box.innerHTML="";
        const finished=document.createElement('p');
        finished.textContent="quiz Finishid";
        scoreContent.textContent=`Total Score : ${score}`;
        box.append(finished,scoreContent);
    }
    display();
})






