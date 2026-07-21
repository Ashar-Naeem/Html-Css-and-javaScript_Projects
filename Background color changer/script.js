const parent=document.getElementById("parent");
parent.addEventListener("click",(e)=>{
    const selector=e.target;
    document.body.style.backgroundColor=selector.id;    
})