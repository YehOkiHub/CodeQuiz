let startBtn = document.getElementById("start");
let containerEl = document.getElementById("container");
let timerEl = document.getElementById("timer");
let scoreEl = document.getElementById("score");
let questconEl = document.querySelector('questcontainer');
let choiceA = document.getElementById("choiceA");
let choiceB = document.getElementById("choiceB");
let choiceC = document.getElementById("choiceC");
let choiceD = document.getElementById("choiceD");

let correctAns = 0;
let questionNum = 0;
let currentQuestionsIndex = 0;   
const questionsArray = [

    {
       question: 'What language mainly spoken in Ancient Rome?',
       choices: ['Roman', 'Italian', 'Spanish', 'Latin'],
       answer: 'Latin'

    },

    {
        question: 'What type of weapon was the Roman Gladius',
        choices: ['Spear', 'Bow', 'Scutum', 'Short Sword'],
        answer: 'Short Sword'
 
     },

     {
        question: 'What Roman Emperor came to power after the assassination of Julius Casear',
        choices: ['Augustus', 'Nero', 'Hadrian', 'Caligula'],
        answer: 'Augustus'
 
     },

     {
        question: "Where did Rome build Hadrian's Wall ",
        choices: ['Germania', 'Gaul', 'Egypt', 'Britannia'],
        answer: 'Britannia'
 
     },

     {
        question: "Which general from Carthage crossed the Alps to attack Rome",
        choices: ['Hannibal', 'Spartacus', 'Pullo', 'Theodoric'],
        answer: 'Hannibal'
 
     }

]



document.getElementById('container').style.visibility = "hidden";
startBtn.addEventListener("click", start);


function getQuestion() {
    const currentQuestionObj = questionsArray[currentQuestionsIndex];
    const questionEl = document.getElementsByClassName('question')[0]
    questionEl.textContent = questionsArray[currentQuestionsIndex].question
    let choicesEL1  = document.getElementById('choiceA')
    choicesEL1.textContent = questionsArray[currentQuestionsIndex].choices[0]
    let choicesEL2  = document.getElementById('choiceB')
    choicesEL2.textContent = questionsArray[currentQuestionsIndex].choices[1]
    let choicesEL3 = document.getElementById('choiceC')
    choicesEL3.textContent = questionsArray[currentQuestionsIndex].choices[2]
    let choicesEL4 = document.getElementById('choiceD')
    choicesEL4.textContent = questionsArray[currentQuestionsIndex].choices[3]
    const buttonNext = document.querySelectorAll("btn")
    buttonNext.addEventListener("click", )
    // for(let i = 0; i < buttonNext.length; i++) {
    //     buttons[i].addEventListener("click", next)




    // }

        
    


}

function start() {
    startBtn.style.visibility='hidden';
    containerEl.style.visibility = "visible";
    getQuestion()
    
            
}
    
    
    
function next() {
    console.log('hello');


}    







   

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
