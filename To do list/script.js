const form =document.querySelector("form");
const input = document.querySelector("input");
const alltasks=document.getElementById("tasks");
const text =input.value.trim();
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text =input.value.trim();
    
    // make a parent div 

    const parent = document.createElement("div");
    const task =document.createElement("span");
    task.textContent=text;
    task.style.marginTop="10px";

    const donebutton =document.createElement("button");
    donebutton.style.marginLeft="10px";
    donebutton.style.marginTop="10px";
    donebutton.textContent="Done";


    const deletebutton=document.createElement("button");
    deletebutton.textContent="Delete";
    deletebutton.style.marginLeft="10px";
    deletebutton.style.marginTop="10px";

    parent.append(task,donebutton,deletebutton);
    alltasks.append(parent);


   deletebutton.addEventListener("click",()=>{
    parent.remove();
   })

   donebutton.addEventListener("click",()=>{
    task.style.textDecoration="line-through";
    task.style.color="grey";
   })

   form.reset();

})