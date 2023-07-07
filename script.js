"use strict";
console.log("hello world")

// select css element that matches the doc
// add function for popup-info
// declare varibale 

const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('continue-btn')



// set up event listener for a buttons

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
    
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}




