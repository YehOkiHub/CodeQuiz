var startBtn = document.getElementById("start");
var containerEl = document.getElementById("container");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var questconEl = document.getElementsByClassName("questcontainer")[0];
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var headerEl = document.getElementsByTagName("header");
var timeleft = 60;

const questionEl = document.getElementsByClassName("question")[0];
let choicesEL1 = document.getElementById("choiceA");
let choicesEL2 = document.getElementById("choiceB");
let choicesEL3 = document.getElementById("choiceC");
let choicesEL4 = document.getElementById("choiceD");



let totalScore = 0;
let correctAns = 0;
let questionNum = 0;
let currentQuestionsIndex = 0;



// questions choices and answers

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
// starts timer and shows game over if time is up
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

// displays questions and choices as well as hide start button
function getQuestion() {
    currentQuestionsIndex++;
    if(currentQuestionsIndex === questionsArray.length) {
    endQuiz()
} else {
    questionEl.innerHTML = questionsArray[currentQuestionsIndex].question;
    choicesEL1.innerHTML = questionsArray[currentQuestionsIndex].choices[0];
    choicesEL2.innerHTML = questionsArray[currentQuestionsIndex].choices[1];
    choicesEL3.innerHTML = questionsArray[currentQuestionsIndex].choices[2];
    choicesEL4.innerHTML = questionsArray[currentQuestionsIndex].choices[3];
}

  startBtn.style.visibility = "hidden";
  containerEl.style.visibility = "visible";
}

// checks the answer as well as deducts timer for wrong answers
function checkAnswer(event) {
        
    
    console.log(event.target.textContent);
        var element= event.target.textContent
        if (element === questionsArray[currentQuestionsIndex].answer) {
        console.log("correct " + totalScore)
        totalScore++
        }   
        else { 
            timeleft -= 5
            timerEl.innerHTML = timeleft + " seconds remaining";    
              console.log("wrong")
              totalScore --                     
        if(totalScore <= 0) {
            totalScore = 0
        }
    }

    getQuestion()
}


choicesEL1.addEventListener("click", checkAnswer);
choicesEL2.addEventListener("click", checkAnswer);
choicesEL3.addEventListener("click", checkAnswer);
choicesEL4.addEventListener("click", checkAnswer);


// Asks user if they want to save score as well as stores score in local memory. Displays high score after
function endQuiz() {
    currentQuestionsIndex = 0;
    questionEl.innerHTML = "Quiz Over!"
    scoreEl.innerText = `Your Score was ${totalScore} of 4`;
    questconEl.style.display = "none";
    if(currentQuestionsIndex === 0){
        timerEl.style.visibility = "hidden"
    }
    if(window.confirm("Save Score?")){

        let name = prompt("Enter Your name");

        let highScoreObj = {
            name:  name,
            score: totalScore
        }
        let myObj_serialized =JSON.stringify(highScoreObj);
        localStorage.setItem("myObj", myObj_serialized);
        let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
        console.log(myObj_deserialized);
        scoreEl.textContent = myObj_deserialized.name +" Has a high score of " + myObj_deserialized.score


            
               

    }
               
}


function next(event) {
  event.preventDefault();
   getQuestion();


}
