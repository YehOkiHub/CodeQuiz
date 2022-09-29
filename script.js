var startBtn = document.getElementById("start");
var containerEl = document.getElementById("container");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var questconEl = document.getElementsByClassName("questcontainer")[0];
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var timeleft = 60;

const questionEl = document.getElementsByClassName("question")[0];
let choicesEL1 = document.getElementById("choiceA");
let choicesEL2 = document.getElementById("choiceB");
let choicesEL3 = document.getElementById("choiceC");
let choicesEL4 = document.getElementById("choiceD");

const buttonNext = document.querySelectorAll(".btn");

let totalScore = 0;
let correctAns = 0;
let questionNum = 0;
let currentQuestionsIndex = 0;





const questionsArray = [
  {
    question: "What language mainly spoken in Ancient Rome?",
    choices: ["Roman", "Italian", "Spanish", "Latin"],
    answer: "Latin",
  },

  {
    question: "What type of weapon was the Roman Gladius",
    choices: ["Spear", "Bow", "Scutum", "Sword"],
    answer: "Sword",
  },

  {
    question:
      "What Roman Emperor came to power after the assassination of Julius Casear",
    choices: ["Augustus", "Nero", "Hadrian", "Caligula"],
    answer: "Augustus",
  },

  {
    question: "Where did Rome build Hadrian's Wall ",
    choices: ["Germania", "Gaul", "Egypt", "Britannia"],
    answer: "Britannia",
  },

  {
    question: "Which general from Carthage crossed the Alps to attack Rome",
    choices: ["Hannibal", "Spartacus", "Pullo", "Theodoric"],
    answer: "Hannibal",
  },
];

document.getElementById("container").style.visibility = "hidden";
startBtn.addEventListener("click", function () {
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
        timerEl.innerHTML = "Game Over";
    } 
    else {
      timeleft--;
      timerEl.innerHTML = timeleft + " seconds remaining"; 

    }
  }, 1000);
  getQuestion();
});

function getQuestion() {
  // event.preventDefault()
  currentQuestionsIndex++;
    if(currentQuestionsIndex === questionsArray.length) {
    endQuiz()
} else {
//   for (let i = 0; i < questionsArray.length; i++) {

    questionEl.innerHTML = questionsArray[currentQuestionsIndex].question;
    choicesEL1.innerHTML = questionsArray[currentQuestionsIndex].choices[0];
    choicesEL2.innerHTML = questionsArray[currentQuestionsIndex].choices[1];
    choicesEL3.innerHTML = questionsArray[currentQuestionsIndex].choices[2];
    choicesEL4.innerHTML = questionsArray[currentQuestionsIndex].choices[3];
}



// checkAnswer()


//   }
  startBtn.style.visibility = "hidden";
  containerEl.style.visibility = "visible";
}


function checkAnswer(event) {
        
    //gets the value of button clicked using event.target
    console.log(event.target.textContent);
        var element= event.target.textContent
        if (element === questionsArray[currentQuestionsIndex].answer) {
        console.log("correct " + totalScore)
        totalScore++
        }   
        else { 
            timerEl.innerHTML = timeleft - 5 + " seconds remaining";    
              console.log("wrong")
              totalScore --                     
        if(totalScore <= 0) {
            totalScore = 0
        }
    }

    getQuestion()
}



// function start() {

//   getQuestion();
// }

choicesEL1.addEventListener("click", checkAnswer);
choicesEL2.addEventListener("click", checkAnswer);
choicesEL3.addEventListener("click", checkAnswer);
choicesEL4.addEventListener("click", checkAnswer);



function endQuiz() {
    currentQuestionsIndex = 0;
    questionEl.innerHTML = "Quiz Over!"
    scoreEl.innerText = `Your Score was ${totalScore} of 4`;
    questconEl.style.display = "none";
    if(currentQuestionsIndex === 0){
        

        timerEl.style.visibility = "hidden"


    }
        
}


function next(event) {
  event.preventDefault();
  console.log(event.target, "event.target");

  getQuestion();






















  // increasing score and decreasing timer
  // make sure parent index is less than questionArray.length -1 increase current index if it is less
  // call get question function
  // if last question, hide questions container, display input box and total score
}

// buttonNext.addEventListener("click", next)

// 1. Have your question array
// 2. Create a variable that determines what question the user is on
// 3. Create a for loop to iterate through the question array based on the current question variable mentioned above
// 4. Create variables for your buttons in the html
// 5. Have the text of the buttons equal to the answers of the current question
// 6. Once the user selects an answer, increment the current question variable in step 2

// var startTimer = setInterval(function() {
//     totalTime--;
//     timeLeft.textContent = totalTime;
//     if(totalTime <= 0) {
//         clearInterval(startTimer);
//         if (questionIndex < questions.length - 1) {
//             gameOver();
//         }
//     }
// },1000);

// let question1 = JSON.stringify(questionsArray[0]);
// questconEl.innertext = (questionsArray[0]);

// document.getElementById("questcontainer").innerText = questionsArray[0];

// function answer() {

// }

// function displayTest() {
//     document.getElementById('container').style.visibility = "visible";;
//     document.getElementById('start').style.visibility = "hidden";

//     var downloadTimer = setInterval(function(){
//         if(timeLeft <= 0){
//           clearInterval(downloadTimer);
//           document.getElementById("timer").innerHTML = "Game Over";
//           window.confirm("Would you like to try again?")
//         } else {
//           document.getElementById("timer").innerHTML = timeLeft + " Seconds Remaining";
//         }
//         timeLeft -= 1;
//       }, 1000);

{/* <h2 id="score"> You scored ${quiz.score} of ${quiz.question.length} </h2> */}