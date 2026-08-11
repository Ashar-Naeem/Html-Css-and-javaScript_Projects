const buttons=document.querySelectorAll('button');
const hides=document.querySelectorAll('.read');
buttons.forEach((button,index) => {
    button.addEventListener('click',()=>{
        
        hides[index].classList.toggle('hide');
    })    
});
