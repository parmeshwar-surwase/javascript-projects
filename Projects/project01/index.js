const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask() {

    const text = input.value.trim();

    if (text === "") return;

    tasks.push(text);

    input.value = "";

    render();
}


function render() {

    list.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");
        li.innerText = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.dataset.index = index;

        li.append(deleteBtn);
        list.append(li);
    });
}


list.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {
        const index = event.target.dataset.index;
        tasks.splice(index, 1);
        render();
    }

    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }

});
