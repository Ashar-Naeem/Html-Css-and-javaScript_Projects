const form =document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const income=document.getElementById("income");
    const amount=parseInt(income.value);
    let totalTax=0;
   if(amount <= 600000){
    totalTax = 0;
}
else if(amount <= 1200000){
    totalTax = (amount - 600000) * 0.01;
}
else if(amount <= 2200000){
    totalTax = 6000 + (amount - 1200000) * 0.11;
}
else if(amount <= 3200000){
    totalTax = 116000 + (amount - 2200000) * 0.20;
}
else if(amount <= 4100000){
    totalTax = 316000 + (amount - 3200000) * 0.25;
}
else if(amount <= 5600000){
    totalTax = 541000 + (amount - 4100000) * 0.29;
}
else if(amount <= 7000000){
    totalTax = 976000 + (amount - 5600000) * 0.32;
}
else{
    totalTax = 1424000 + (amount - 7000000) * 0.35;
}
    const result=document.querySelector("h2");
    result.textContent=`Total Tax : ${totalTax}`;
    form.reset();
    
})