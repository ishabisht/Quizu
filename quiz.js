//Question bank
var questionBank= [
    {
        question : ' Javascript is a _____ language.',
        option : ['Programming','Scripting','Application','Non Of the Above'],
        answer : 'Scripting'
    },
    {
        question : 'Which of the following purpose, JavaScript is designed for ?',
        option : ['To Execute Query Related to DB on Server','To Style HTML Pages','To Perform Server Side Scripting Opertion','To add interactivity to HTML Pages'],
        answer : 'To add interactivity to HTML Pages'
    },
    {
        question : 'JavaScript code is written inside file having extension',
        option : [' .jvs','.js','.jsc','.javascript'],
        answer : '.js'
    },
    {
        question : 'Why JavaScript is called as Lightweight Programming Language ?',
        option : ['because JS is client side scripting','because JS is available free of cost.','because we can add programming functionality inside JS','because JS can provide programming functionality inside but up to certain extend.'],
        answer : 'because JS can provide programming functionality inside but up to certain extend.'
    },
    {
        question : 'JavaScript _________ when there is an indefinite or an infinite value during an arithmetic computation.',
        option : ['Prints an exception error','Prints an overflow error',' Displays "Infinity"','Prints the value as such'],
        answer : 'Displays "Infinity"'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();