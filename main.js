const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const startMenu = document.querySelector("#start-menu");
const endMenu = document.querySelector("#end-menu");

startBtn.addEventListener("click", ()=> {
    startMenu.classList.toggle("click");
    
})

endBtn.addEventListener("click", ()=> {
    endMenu.classList.toggle("click");
})