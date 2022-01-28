'use strict';
const startRate = document.querySelector(".start-rate .rate_list");
const endRate = document.querySelector(".end-rate .rate_list");
const startBtn = document.querySelector(".start-rate .fas");
const endBtn = document.querySelector(".end-rate .fas");

console.log(startRate);

startBtn.addEventListener("click" , ()=>{
    startRate.classList.toggle("click");
});

endBtn.addEventListener("click",()=>{
    endRate.classList.toggle("click");
});


