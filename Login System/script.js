 const users = [
    {
        email: "ashar@gmail.com",
        password: "12345678"
    },
    {
        email: "ali@gmail.com",
        password: "password123"
    },
    {
        email: "ahmed@gmail.com",
        password: "qwerty123"
    }
];

const message=document.createElement("div");
// email 
const emailinput=document.getElementById("email");
// password 
const passwordinput=document.getElementById("password");
//checkbox
const checkbox=document.getElementById("check");
checkbox.addEventListener("click",()=>{
    if(passwordinput.type=="password")
    {
    passwordinput.type="text";
    }
else{
    passwordinput.type="password";
    }

})
function checkValidity(){
    let found=false;
    for(let i=0;i<users.length;i++)
    {
        if(emailinput.value==users[i].email && passwordinput.value==users[i].password)
        {
            found=true;
            break;
        }
    }
    if(found)
    {
        message.textContent="Login Successfully";
        button.after(message);
        emailinput.style.borderColor="green";
        passwordinput.style.borderColor="green";
        emailinput.value="";
        passwordinput.value="";
        
       
    }
    else{
        message.textContent="Wrong Email or password";
        button.after(message);
        emailinput.style.borderColor="red";
        passwordinput.style.borderColor="red";
        emailinput.value="";
        passwordinput.value="";
    }
}

emailinput.addEventListener("click",()=>{
    emailinput.style.borderColor="blue";
   
})

passwordinput.addEventListener("click",()=>{
    passwordinput.style.borderColor="blue";
})

const button=document.querySelector("button");
button.addEventListener("click",()=>{
    checkValidity();
})