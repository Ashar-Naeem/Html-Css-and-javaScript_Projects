const answers={
    q1: "Islamabad",
    q2: "Mars",
    q3: "Thomas Edison",
    q4: "Pacific Ocean",
    q5: "Cheetah"
} 

const form =document.getElementById("quizForm");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data =new FormData(form);
    let correct_answers=0;
    for(let [name,values] of data.entries())
    {
        if(answers[name]===values)
        {
            correct_answers++;
        }
    }
    const result=document.getElementById('result');
    result.style.marginTop="10px";
    result.textContent=`Your Score is ${correct_answers} out of 5`;
})