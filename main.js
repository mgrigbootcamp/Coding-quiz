var questions= [
    {
        title:"CSS is used primarily to:", 
        choices: ["Style a webpage", "Store variables", "Use event listeners", "Store data"],
        answer: "Style a webpage"
    },
    {
        title: "Which of the following is not a Javascrpit data type?",
        choices: ["Boolean", "Class", "Number", "String"],
        answer: "Class"
    },
    {
        title:"Boostrap is a CSS library:",
        choices: ["True", "False"],
        answer: "True",
    }
];
displayquestionIndex();
var secondsLeft= 60;
var highScores= [];
var score= 0;
var questionIndex= 0;
var timer;
var timerEl=document.querySelector(".timer");
var startButtonEl=document.querySelector(".start-button")
startButtonEl.addEventListener("click", startQuiz);
//Target elements in html and store variables here

function startQuiz (){
    var startPage= document.querySelector (".start-page");
    startPage.setAttribute("style","display:none");
    var questionsPage=document.querySelector(".questions-page");
    questionsPage.removeAttribute("style");
    timer=setInterval(function(){
        secondsLeft--
        timerEl.textContent=secondsLeft
    }, 1000)
    displayQuestion()
    
    
}
function displayQuestion (){
    var questionTitle= questions[questionIndex].title
    //Target question title element on page and change text content
    //var questionTitle= questions[questionIndex].title
    //Write a loop to create all the buttons
    //

}
function checkAnswer (){
    questionIndex++
    displayQuestion ()

}
function quizEnd (){

}
function displayHighscores (){

}
function submitHighscore (){

}
