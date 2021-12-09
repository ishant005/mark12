const quizForm=document.querySelector('.quiz-form');
const submitAnswerBtn=document.querySelector("#submit-answer-btn")

const outputEl=document.querySelector("#output");
const correctAnswers=["90","right angled","acute","Scalene Triangle","Hypotenuse"];

function calculateScore(){
     
     let index=0;
     const formResults=new FormData(quizForm);
     let score=0;
     for(let value of formResults.values()){
         for(let index=0;index<=4;index++){
         if(value===correctAnswers[index]){
             score=score+1;
         
         index=index+1;
     }
    }
}
     outputEl.innerText="Your score is"+score;

}

submitAnswerBtn.addEventListener('click',calculateScore);