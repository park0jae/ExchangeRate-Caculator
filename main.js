'use strict';
const startRate = document.querySelector(".start-rate .rate .rate-title .main");
const endRate = document.querySelector(".end-rate .rate .rate-title .main");
const startBtn = document.querySelector(".start-rate .rate .fas");
const endBtn = document.querySelector(".end-rate .rate .fas");

console.log(startRate);
console.log(startBtn);


startBtn.addEventListener("click" , ()=>{
    startRate.classList.toggle("click");
});

endBtn.addEventListener("click",()=>{
    endRate.classList.toggle("click");
});


