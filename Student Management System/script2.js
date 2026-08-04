const students = [
    { name: "Ashar",
      age: 19,
      course: "Software Engineering" 
    },
    {  name: "Ali", 
       age: 20,
       course: "Computer Science" 
    }
];

const container = document.querySelector(".container");

let editIndex=null;
function display_students() {
    container.innerHTML = ""; 
    students.forEach((student, index) => {
        const box = document.createElement("div");
        box.classList.add("box");

        const name = document.createElement("p");
        name.textContent = `Name : ${student.name}`;

        const age = document.createElement("p");
        age.textContent = `Age : ${student.age}`;

        const course = document.createElement("p");
        course.textContent = `Course : ${student.course}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        deleteButton.addEventListener("click", () => {
            students.splice(index, 1);
            display_students();
        });

      

        // edit 

        editButton.addEventListener("click",()=>{
            const nameInput = document.getElementById("nameinput");
            const ageInput = document.getElementById("ageinput");
            const courseInput = document.getElementById("courseinput");

            nameInput.value=student.name;
            ageInput.value=student.age;
            courseInput.value=student.course;
            editIndex=index;


            addStudent.textContent = "Update Student";
        })

        box.append(name, age, course, deleteButton, editButton);
        container.append(box);
    });
}


display_students();

const addStudent = document.getElementById("addbutton");
addStudent.addEventListener("click", () => {
    const nameInput = document.getElementById("nameinput");
    const ageInput = document.getElementById("ageinput");
    const courseInput = document.getElementById("courseinput");

    addStudent.textContent = "Add Student";

    if(editIndex==null){
        students.push({
        name: nameInput.value,
        age: ageInput.value,
        course: courseInput.value
    });
    }
    else{
    students[editIndex].name = nameInput.value;
    students[editIndex].age = ageInput.value;
    students[editIndex].course = courseInput.value;

    editIndex=null;
    }
    
    display_students();
    document.querySelector("form").reset();
});