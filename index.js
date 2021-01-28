// import readlineSync package
var readlineSync = require('readline-sync');
// Taking user name
var userName = readlineSync.question(`What's your good name? `);
// welcome user
console.log('Welcome ' + userName+'!');
console.log(`let's check how well do you know me? `);
console.log('----------------------------');

// intialize score variable with null
var score = 0;


// function to print Question
function Question(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log('you are right');
    score = score + 1;
    console.log('your score: '+ score);
    console.log('---------------------------------');
  } else {
    console.log('you are wrong');
    console.log('your score: '+ score);
    console.log('---------------------------------');
  }
}

// arry of question list
var questionList = [{
  question: "where do i live? ",
  answer:"dhanera"
},{
  question: 'what is my nickname? ',
  answer: 'meet'
},{
  question: 'How old Am I? ',
  answer: '22'
},{
  question: 'who is my idol? ',
  answer: 'steve jobs'
},{
  question: 'who is my favourite cricketer? ',
  answer: 'dhoni'
}]


for(i=0; i<questionList.length; i++){
  Question(questionList[i].question,questionList[i].answer);
}

console.log('your final score is: ', score);
