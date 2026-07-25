setInterval(()=>{
const currentTime=Date.now();
const OlympicTime= new Date(2028,7,10).getTime();



let timer=OlympicTime-currentTime;

const days=Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;

const hours=Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;

const minutes=Math.floor((timer)/(1000*60));
timer%=1000*60;

const seconds =Math.floor((timer)/(1000));
timer%=1000;

const result=document.querySelector("h2");
result.textContent=`${days} days  ${hours} hours  ${minutes} minutes  ${seconds} seconds`;
},1000)




