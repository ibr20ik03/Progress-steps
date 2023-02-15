
let counter = 1;
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let valueStep = document.querySelector(".value");

check();

btnNext.addEventListener("click",next);
btnPrev.addEventListener("click",prev);


function next() {
    counter++;
    check();
}

function prev() {
    counter--;
    check();
}


// function controle at button [next && prev]
function check() {
    valu();
    if (counter == 1) {
        btnPrev.style = "background-color: #e0e0e0; cursor: not-allowed; pointer-events: none";
        btnNext.style = "";
    }else if (counter == 4) {
        btnPrev.style = "";
        btnNext.style = "background-color: #e0e0e0; cursor: not-allowed; pointer-events: none";
    }else {
        btnNext.style = "";
        btnPrev.style = "";
    }
}


// function add active style on step box
function valu() {
    removeAll();
    var step2 = document.querySelector(`.step_2`);
    var step3 = document.querySelector(`.step_3`);
    var step4 = document.querySelector(`.step_4`);

    if (counter == 2) {
        step2.style = "border-color: #3498db";
        valueStep.style.width = "34%";
    }else if (counter == 3) {
        step2.style = "border-color: #3498db";
        step3.style = "border-color: #3498db";
        valueStep.style.width = "68%";
    }else if (counter == 4) {
        step2.style = "border-color: #3498db";
        step3.style = "border-color: #3498db";
        step4.style = "border-color: #3498db";
        valueStep.style.width = "100%";
    };
};


// function remove all property from step box
function removeAll() {
    valueStep.style.width = "0";
    let allSteps = document.querySelectorAll(".step");
    allSteps.forEach((ele) => {
        ele.style = "";
    });
};