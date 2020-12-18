let closeTab = document.querySelector("img.close");
let layer = document.querySelector(".layer");
let box = document.querySelector(".box");
let resourse = document.querySelector(".resourse");
let info = document.querySelector(".info");
let answerInput = document.querySelectorAll(".answerInput");
let eye = document.querySelector(".eye");
let answer = ["eraser", "ruler", "pencil", "book", "pen"];
let resetInputs = document.querySelector(".reset");
let Chocise = document.querySelectorAll(".Chocise");
var container;
var truly = false;

resourse.addEventListener("click", function () {
    box.innerHTML = `
    <img  src="images/dummy.jpg" alt="">
    <img class="close" src="images/close_icon.png" alt="">
    `;
    layer.classList.replace("d-none", "d-flex");
});
info.addEventListener("click", function () {
    box.innerHTML = `
    <h3>Hel Content Goes Here</h3><img class="close" src="images/close_icon.png" alt="">
    `;
    layer.classList.replace("d-none", "d-flex");
});
if (closeTab != null) {
    closeTab.addEventListener("click", function () {
        layer.classList.replace("d-flex", "d-none");
    });
}
function getAnswer() {
    for (let i = 0; i < answerInput.length; i++) {
        answerInput[i].innerHTML = `<p>${answer[i]}</p> <img src="images/tikMark-small.png">`;;
    }
}
eye.addEventListener("click", getAnswer);
function reset() {
    for (let i = 0; i < answerInput.length; i++) {
        answerInput[i].innerHTML = ``;
    }
}
resetInputs.addEventListener("click", reset);
for (let i = 0; i < Chocise.length; i++) {
    Chocise[i].addEventListener("click", function () {
        container = Chocise[i].innerHTML;
        resetBackGround();
        Chocise[i].classList.add("bg-info", "text-white");
        
    });
};
for (let i = 0; i < answerInput.length; i++) {
    answerInput[i].addEventListener("click", function Add() {
        if (chechIsTrue() && isRepted() != false) {
            answerInput[i].innerHTML = `<p>${container}</p> <img src="images/tikMark-small.png">`;
            answerInput[i].style.cssText = `opacity: 1;`
            for (let i = 0; i < Chocise.length; i++) {
                if (container == Chocise[i].innerHTML) {
                    Chocise[i].style.cssText = "visibility: hidden;"
                }
            }
            return true;
        } else {
            answerInput[i].innerHTML = `<p>${container}</p> <img src="images/crossMark-small.png">`;
            answerInput[i].style.cssText = `animation: lighter 0.1s 3; -webkit-animation: lighter 1s 3;`
        }
    })
}
function chechIsTrue() {
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] == container) {
            truly = true;
            return true;
        } else {
            console.log("false");
        }
    }
}
function isRepted() {
    for (let i = 0; i < answerInput.length; i++) {
        if (container == answerInput[i].innerHTML) {
            console.log("hi");
            return false
        }
    }
}
/* $("p:not(.intro)").css("background-color", "yellow"); */

function resetBackGround() {
    for (let i = 0; i < Chocise.length; i++) {
        Chocise[i].classList.remove("bg-info" , "text-white")
    }
}