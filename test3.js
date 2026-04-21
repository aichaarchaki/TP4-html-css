//exercice 1:
let a =parseInt(prompt("enter the first number :"));
let b=parseInt(prompt("enter the second number :"));
console.log("la somme est : " + (a+b));
console.log("la sustraction est : " + (a_b));
console.log("la multiplacation est : " + (a*b));
console.log("la division est : " + (a/b));

//exercice 2:
let C=0
do{
    a=prompt("enter un nomber : ");
    if (a<1){
        alert("donner un nombre plus grande ");
        C++;
    }
    if (a>10){
        alert("donner un nombre plus petite ");
        C++;
    }
}while ( a>10 || a<1);
console.log( "le score est : " + C);
//exercice 3 : 
const QUESTIONS = [
  ["What does CPU stand for?", "Central Processing Unit"],
  ["What does RAM stand for?", "Random Access Memory"],
  ["What does ROM stand for?", "Read Only Memory"],
  ["What is the main function of the CPU?", "Process data"],
  ["What device is used to input text into a computer?", "Keyboard"],
  ["What device displays information on the screen?", "Monitor"],
  ["What does OS stand for?", "Operating System"],
  ["Which part of the computer stores data permanently?", "Hard Disk"],
  ["What is the brain of the computer?", "CPU"],
  ["What type of software is Windows?", "Operating System"]
];
let C=0;
function lancerQuiz(){
    for (i=0;i<10;i++){
            A=prompt(QUESTIONS[i][0]);
            if(A===QUESTIONS[i][1]){
                alert("your answer is correct ");
                C++;

            }else{
                alert("your answer is incorrect ");
            }
    }
    alert("your score is : "+ C);

}


