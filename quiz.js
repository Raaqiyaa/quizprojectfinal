// const questions = [
//     {
//         question: "Who is the author of the novel 'To Kill a Mockingbird?'",
//         optionA: "Harper Lee",
//         optionB: "J.D. Salinger",
//         optionC: "F. Scott Fitzgerald",
//         optionD: "Mark Twain",
//         correctOption: "optionA"
//     },
//     {
//         question: "What is the chemical symbol for the element oxygen?",
//         optionA: "O",
//         optionB: "0c",
//         optionC: "Om",
//         optionD: "Ox",
//         correctOption: "optionA"
//     }
// ];

// let shuffledQuestions = [];
// let questionNumber = 1;
// let playerScore = 0;
// let wrongAttempt = 0;
// let indexNumber = 0;

// function handleQuestions() {
//     while (shuffledQuestions.length <= 9) {
//         const random = questions[Math.floor(Math.random() * questions.length)];
//         if (!shuffledQuestions.includes(random)) {
//             shuffledQuestions.push(random);
//         }
//     }
// }

// function NextQuestion(index) {
//     handleQuestions();
//     const currentQuestion = shuffledQuestions[index];
//     document.getElementById("question-number").innerHTML = questionNumber;
//     document.getElementById("player-score").innerHTML = playerScore;
//     document.getElementById("display-question").innerHTML = currentQuestion.question;
//     document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
//     document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
//     document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
//     document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
// }

// function checkForAnswer() {
//     const currentQuestion = shuffledQuestions[indexNumber];
//     const currentQuestionAnswer = currentQuestion.correctOption;
//     const options = document.getElementsByName("option");
//     let correctOption = null;

//     options.forEach((option) => {
//         if (option.value === currentQuestionAnswer) {
//             correctOption = option.id;
//         }
//     });

//     if (
//         !options[0].checked &&
//         !options[1].checked &&
//         !options[2].checked &&
//         !options[3].checked
//     ) {
//         document.getElementById("option-modal").style.display = "flex";
//     }

//     options.forEach((option) => {
//         if (option.checked && option.value === currentQuestionAnswer) {
//             document.getElementById(correctOption).style.backgroundColor = "green";
//             playerScore++;
//             indexNumber++;
//             questionNumber += 1;
//         } else if (option.checked && option.value !== currentQuestionAnswer) {
//             const wrongLabelId = option.id;
//             document.getElementById(wrongLabelId).style.backgroundColor = "red";
//             document.getElementById(correctOption).style.backgroundColor = "green";
//             wrongAttempt++;
//             indexNumber++;
//             questionNumber += 1;
//         }
//     });
// }

// function handleNextQuestion() {
//     checkForAnswer();

//     setTimeout(() => {
//         if (indexNumber <= 9) {
//             NextQuestion(indexNumber);
//         } else {
//             handleEndGame();
//         }
//         resetOptionBackground();
//     }, 1000);
// }

// function resetOptionBackground() {
//     const options = document.getElementsByName("option");
//     options.forEach((option) => {
//         document.getElementById(option.id).style.backgroundColor = "";
//     });
// }

// function unCheckRadioButtons() {
//     const options = document.getElementsByName("option");
//     options.forEach((option) => {
//         option.checked = false;
//     });
// }

// function handleEndGame() {
//     let remark = null;
//     let remarkColor = null;

//     if (playerScore <= 3) {
//         remark = "Bad Grades, Keep Practicing.";
//         remarkColor = "red";
//     } else if (playerScore >= 4 && playerScore < 7) {
//         remark = "Average Grades, You can do better.";
//         remarkColor = "orange";
//     } else if (playerScore >= 7) {
//         remark = "Excellent, Keep the good work going.";
//         remarkColor = "green";
//     }
//     const playerGrade = (playerScore / 10) * 100;

//     document.getElementById("remarks").innerHTML = remark;
//     document.getElementById("remarks").style.color = remarkColor;
//     document.getElementById("grade-percentage").innerHTML = playerGrade;
//     document.getElementById("wrong-answers").innerHTML = wrongAttempt;
//     document.getElementById("right-answers").innerHTML = playerScore;
//     document.getElementById("score-modal").style.display = "flex";
// }

// function closeScoreModal() {
//     questionNumber = 1;
//     playerScore = 0;
//     wrongAttempt = 0;
//     indexNumber = 0;
//     shuffledQuestions = [];
//     NextQuestion(indexNumber);
//     document.getElementById("score-modal").style.display = "none";
// }

// function closeOptionModal() {
//     document.getElementById("option-modal").style.display = "none";
// }

// NextQuestion(indexNumber);