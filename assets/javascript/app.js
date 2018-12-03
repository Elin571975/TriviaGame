var correct = 0;
var incorrect = 0;
var unaswered = 0;
var runningQuestionIndex;

//=================================================================================
// INITIALIZE AND MAKE THE GAME RUN

function runTheGame(){
  $(".startPage").css('display','none');   // also can use -> hide();
  $("#doneBtn").css('display','none');

  countDown (10,"timer");

  buildQuestions();

  $("#doneBtn").click(function(){
    
    checkAnswer();

    $(".game").css('display','none'); 

    $("#allDone").html("All Done!!!");
    $("#correct").html("Correct Answers: " + correct + " out of 5 questions in total");
    $("#incorrect").html("Uncorrect Answers: " + incorrect + " out of 5 questions in total");
    $("#unanswered").html("Unsaswered Questions: " + correct + " out of 5 questions in total");
  });

}

//=================================================================================
//GENERATE RANDOM QUESTIONS

function buildQuestions(){

    for (var i = 0; i < 5; i++) {

      //generate the index to look into the array of objects
      runningQuestionIndex = Math.floor(Math.random() * 9) + 0;
      console.log(runningQuestionIndex);
   
      var q = triviaQuestions[runningQuestionIndex];
      console.log(q);

      var qBox = $("<div>");
        //   qBox.attr({"class": 'question'});
          $('<p id = "question">' +q.question+ '</p>').appendTo('.trivia');
        //   $('.question').html(q.question); 

      var aBox = $("<div>");
        //   aBox.attr({"class": 'choiceA'});
          $('<input type="radio" id="radioBtn">' +q.choiceA +'</input>').appendTo('.trivia');

      var bBox = $("<div>");
        //   bBox.attr({"class": 'choiceB'});
          $('<input type="radio" id="radioBtn">' +q.choiceB+ '</input>').appendTo('.trivia');
  
      var cBox = $("<div>");
        //   cBox.attr({"class": 'choiceC'});
          $('<input type="radio" id="radioBtn">' +q.choiceC+ '</input>').appendTo('.trivia');
          
      var dBox = $("<div>");
        //   dBox.attr({"class": 'choiceD'});
          $('<input type="radio" id="radioBtn">' +q.choiceD+ '</input>').appendTo('.trivia');
           }  

    $('<input type="button" id="doneBtn" value="DONE"/>').appendTo('.trivia');         

    }

//=================================================================================
// TIMER FUNCTION

function countDown (secs, elem){
    var element = document.getElementById(elem);
    element.innerHTML = "Time Remaining: " + secs + " Seconds";
    if (secs <= 0){
        clearTimeout(timer);
        element.innerHTML = "<h2> Time is Up! </h2>";
        }
    secs --;
    var timer = setTimeout('countDown('+secs+', "'+elem+'")', 1000);
}

//=================================================================================
// CHECK ANSWERS

function checkAnswer(){

}










//===============================================================================
// TRIVIA DATABASE

var triviaQuestions = [

  //question1 - do I need to declare the variables of the object?
  {question: "How much was Orson Wells Oscar approximately auctioned for in 2011?",
   choiceA: "$550K",
   choiceB: "$650K",
   choiceC: "$750K",
   choiceD: "$850K",
   answer: "D"},
        
  //question2
  {question: "How many categories are in The Oscars?",
   choiceA: "20",
   choiceB: "24",
   choiceC: "26",
   choiceD: "28",
   answer: "B"},

  //question3
  {question: "Which year did Gone with The Wind win as Best Picture?",
   choiceA: "1939",
   choiceB: "1941",
   choiceC: "1937",
   choiceD: "1943",
   answer: "A"},  

  //question4
  {question: "Since 2004, when Academy Award nomination results have been announced to the public?",
   choiceA: "Beginning February",
   choiceB: "Beginning January",
   choiceC: "Mid January",
   choiceD: "Mid February",
   answer: "C"},
      
  //question5
  {question: "What is Oscar statuette made of?",
   choiceA: "Solid Gold",
   choiceB: "Gold-Plated Bronze",
   choiceC: "Gold-Plated Silvery",
   choiceD: "Gold-Painted Bronze",
   answer: "B"},
   
  //question6
  {question: "Which movie has won for Best Picture in 2000?",
   choiceA: "A Beautiful Mind",
   choiceB: "American Beauty",
   choiceC: "Gladiator",
   choiceD: "Chicago",
   answer: "C"},

  //question7
  {question: "When was the first Oscar Cerimony held?",
   choiceA: "1925",
   choiceB: "1929",
   choiceC: "1930",
   choiceD: "1932",
   answer: "B"},

  //question8
  {question: "Which Production Company did get most nominations?",
   choiceA: "Paramount",
   choiceB: "Universal",
   choiceC: "Warner Bros",
   choiceD: "Metro-Goldwyn-Mayer",
   answer: "D"},

  //question9
  {question: "Which actress has won The Oscars the most?",
   choiceA: "Grace Kelly",
   choiceB: "Jodie Foster",
   choiceC: "Meryl Streep",
   choiceD: "Katherine Hepburn",
   answer: "D"},
   
  //question10
  {question: "Which actor has won The Oscars the most?",
   choiceA: "Daniel Day-Lewis",
   choiceB: "Marlon Brando",
   choiceC: "Lawrence Olivier",
   choiceD: "Al Pacino", 
   answer: "A"}  
];

