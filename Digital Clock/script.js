
setInterval(()=>{
    const time=new Date();
    div=document.querySelector("h1");
    div.textContent=time.toLocaleTimeString();
},1000)
(1000) // they are in the form of milisec