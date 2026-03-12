const input = document.querySelector("#commentInput");
const btn = document.querySelector("#postBtn");
const box = document.querySelector("#comments");

btn.addEventListener("click", function(){

    const text = input.value;

    if(text === "") return;

    const div = document.createElement("div");

    div.innerHTML = `
        <p>${text}</p>
        <button class="delete">Delete</button>
    `;

    box.append(div);

    input.value = "";

});

box.addEventListener("click", function(event){

    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }

});
