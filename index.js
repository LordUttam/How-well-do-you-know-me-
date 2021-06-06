const readlineSync = require('readline-sync');
const player_name = readlineSync.question("Hello, What is your name? \n");

var score = 0;

console.log("\n\n");

console.log(`Hey ${player_name}! There will be 10 questions (including MCQs) to assess how well you know me. Each question carries 1 point. There will be no negative marking. You just need to type a, b, c or d.`);

console.log("*".repeat(50));

var questions = [
  {
    question: "If you came here then you surely know my name. What is my name?",
    answer: "Uttam"
  },  {
    question: "How old am I?",
    options: ["a. 20","b. 23","c. 25","d. 27"],
    answer: "b"
  },  {
    question: "What is my hometown?",
    options: ["a. Indore","b. Bhopal","c. Agra","d. Jabalpur"],
    answer: "b"
  },  {
    question: "Which year did/will I graduate?",
    options: ["a. 2019","b. 2020","c. 2021","d. 2022"],
    answer: "b"
  },  {
    question: "What is my hobby?",
    options: ["a. Chess","b. Ludo","c. PUBG","d. Cricket"],
    answer: "a"
  },  {
    question: "What is my specialization?",
    options: ["a. Computer Science","b. Electronics and Communication","c. Information Technology","d. Mechanical Engineering"],
    answer: "b"
  },  {
    question: "What is something I would do if I am bored?",
    options: ["a. Watch movies/TV series","b. Talk to friends","c. Go for a walk","d. All of these"],
    answer: "d"
  },  {
    question: "What would I rather drink?",
    options: ["a. Alcohol","b. Plain Milk","c. Chocolate Milk","d. Orange Juice"],
    answer: "b"
  },  {
    question: "What is my favourite blue?",
    options: ["a. Skyblue","b. Teal","c. Aquamarine","d. Turquoise"],
    answer: "c"
  },  {
    question: "Which marvel superhero do I find most ridiculous?",
    options: ["a. Captain Marvel","b. Ant Man", "c. Captain America", "d. Hawkeye"],
    answer: "b"
  },
]

var wrong_answers = 0;

function mcqQuiz(){
    console.log(questions[i].question);
    for (let option in questions[i].options){
      console.log(questions[i].options[option]);
    }

    //Question in next line which is blank
    var answer = readlineSync.question("\n Your answer: ");  
    
    return answer
}

// MAIN LOOP
for(var i=0; i<questions.length; i++){

  console.log("_".repeat(40));
  console.log("");

  if('options' in questions[i]){
    // If question has options then execute this function.
    var given_answer = mcqQuiz();
  }
  else {
    var given_answer = readlineSync.question(questions[i].question+"\n\n");
  }

  console.log("");

  if(given_answer.toLowerCase()===questions[i].answer.toLowerCase()){
    score=score+1;

    // Don't display this for the last question
    if(i<questions.length-1){
      console.log(`That was the right answer ${player_name}. Keep it up.`);
    } 
  }

  else {
    wrong_answers++;

    // On first wrong answer
    if(wrong_answers===1)
      console.log("Well, that wasn't the right answer.");   
    // On subsequent wrong answers.
    else {
      console.log("Wrong answer again!");
    }
  }
}

console.log(" ");
console.log("*".repeat(50));
console.log(" ");

if(score>5){
  console.log(`Congratulations! Your score was ${score} point(s). You know me pretty well. I did not expect that.`)
}
else {
  console.log(`Your score was ${score} points. Seems like you don't know me very well.`)
}