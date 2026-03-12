const input = document.querySelector("#itemInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#list");

button.addEventListener("click", function () {

    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text + " ";

    const del = document.createElement("button");
    del.textContent = "Delete";

    del.addEventListener("click", function () {
        li.remove();
    });

    li.append(del);
    list.append(li);

    input.value = "";

});
