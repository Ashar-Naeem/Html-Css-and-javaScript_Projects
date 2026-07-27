const body=document.querySelector("body");
body.addEventListener("click",(e)=>{
    const element=document.createElement("div");
    element.classList.add("circle");
    const color=['red','green','blue','yellow'];

    element.style.backgroundColor=color[Math.floor(Math.random()*4)];
    element.textContent="Hi";

    element.style.top=`${e.clientY}px`;
    element.style.left=`${e.clientX}px`;

    body.append(element);



})