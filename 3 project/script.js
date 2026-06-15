const questions = [
    {
        question: "ორი ჩიტი მიფრინავდა ერთი განსაკუთრებით",
        answers: [
            { text: "ვეთანხმები", correct: false },
            { text: "არ ვეთანხმები", correct: false },
            { text: "ძალიან ვეთანხმები", correct: true },
            { text: "ძალიან არ ვეთანხმები", correct: false }
        ]
    },
    {
        question: "ტყიდან გამორბის კამეჩი, შავია რას ერჩი",
        answers: [
            { text: "არ ვერჩი", correct: true },
            { text: "ზანგია", correct: false },
            { text: "შავებზე ალერგია მაქ", correct: false },
            { text: "უბრალოდ კაი კაცია", correct: false }
        ]
    },
    {
        question: "ვინ არის ბუტკო ბუტკაშვილი",
        answers: [
            { text: "ციხეშია ნაჯდომი", correct: false },
            { text: "ჟინზვარამ", correct: false },
            { text: "რავიცი ვინაა მა შობელძაღლი", correct: false },
            { text: "პორნოს რეჟისორი", correct: true }
        ]
    },
    {
        question: "როდის წამოვიდა ჟუჟუნა წვიმა",
        answers: [
            { text: "ზეგ დილას", correct: false },
            { text: "უნიტაზი", correct: true },
            { text: "1977", correct: false },
            { text: "დღეს დილას", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); // ✅ უნდა იყოს answerButtons
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `ქვიზი დასრულდა 🎉 შენი ქულაა: ${score}/${questions.length}`;
        nextButton.style.display = "none";
    }
});

startQuiz();
