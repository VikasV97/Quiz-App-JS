let correctOption = ['B', 'A', 'A', 'A'];
let form1 = document.querySelector('.quiz-form');
let result1 = document.querySelector('.result');

form1.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;

    let userAnswers = [form1.q1.value, form1.q2.value, form1.q3.value, form1.q4.value];
    //console.log(userAnswers);
    userAnswers.forEach((answer, index)=> {
        if(answer === correctOption[index]){
            score+=25;
        }
    });
    //console.log(score);
    // to scroll automatically after quiz
    scrollTo(0, 0);
    
    result1.innerHTML =`Your score is : ${score}%`;

    // animating the score
    let output = 0;
    const timer = setInterval(() => {
        result1.innerHTML =`Your score is : ${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output+=1;
        }

    }, 25);
});



