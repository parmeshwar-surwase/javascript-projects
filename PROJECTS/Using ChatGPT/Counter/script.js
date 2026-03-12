let countElement = document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click", function () {
    count++;
    countElement.innerText = count;
    updateUI();
});

decreaseBtn.addEventListener("click", function () {
    count--;
    countElement.innerText = count;
    updateUI();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countElement.innerText = count;
    updateUI();
});

function updateUI() {
    countElement.innerText = count;

    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }
}

document.addEventListener("keydown", function (event){

    if (event.key === "+"){
        count++;
    }
    else if (event.key === "-"){
        count--;
    }
    else if (event.key === "0"){
        count = 0;
    }

    updateUI();
});