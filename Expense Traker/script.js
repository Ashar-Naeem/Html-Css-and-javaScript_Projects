
const expenses = [
    {
        title: "Burger",
        amount: 120,
        category: "Food"
    }
];


let editIndex=null;

const container=document.querySelector(".container");
const totalExpense = document.getElementById("totalExpense");
function display_Expense(){
    let totalAmount=0;
    container.innerHTML="";

    expenses.forEach((expense,index) => {

        const title=document.createElement("p");
        title.textContent=`Title : ${expense.title}`;
        const amount=document.createElement("p");
        amount.textContent=`Amount : ${expense.amount}`;
        const category=document.createElement("p");
        category.textContent=`Category : ${expense.category}`;

        totalAmount+=expense.amount;
        
        const box= document.createElement("div");
        box.classList.add("box");

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";

        deleteButton.addEventListener('click',()=>{
            expenses.splice(index,1);
            display_Expense();
        })

        const editButton=document.createElement("button");
        editButton.textContent="Edit";
     
        editButton.addEventListener('click',()=>{
            const inputTitle=document.getElementById("title");
            const inputAmount=document.getElementById("amount");
            const inputCategory=document.getElementById("category");

            inputTitle.value=expense.title;
            inputAmount.value=expense.amount;
            inputCategory.value=expense.category;

            editIndex=index;

            addButton.textContent="Update";
        })
       

       
       

        box.append(title,amount,category,deleteButton,editButton);
        container.append(box);

    });
    totalExpense.textContent=`Total Expense :${totalAmount}`;
}
display_Expense();

const addButton=document.getElementById("addButton");
addButton.addEventListener("click",()=>{
    const inputTitle=document.getElementById("title");
    const inputAmount=document.getElementById("amount");
    const inputCategory=document.getElementById("category");

    if(editIndex==null){
    expenses.push({title: inputTitle.value,amount: parseInt(inputAmount.value),category: inputCategory.value});
    }
    else{
        addButton.textContent="Add Expense";
    expenses[editIndex].title=inputTitle.value;
    expenses[editIndex].amount=parseInt(inputAmount.value);
    expenses[editIndex].category=inputCategory.value;
    editIndex=null;
    }
    display_Expense();
    document.querySelector('form').reset();
});


