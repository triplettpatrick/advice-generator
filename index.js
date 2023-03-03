'use strict';

const endpoint = "https://api.adviceslip.com/advice";

const advice = document.getElementById("advice");
const button = document.querySelector("a");

const card = document.querySelector(".card-container");
const divider = document.querySelector(".divider");
const block = document.querySelector(".block");
const marks = document.querySelector(".marks");

function getAdvice() {
    return fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        return {
            advice: data.slip.advice,
            id: data.slip.id
        }
        
      });
};

const quote = button.addEventListener("click", function() {
    const promise = new Promise((resolve) => {
        getAdvice().then(advice => {
            resolve(advice);
            // console.log(advice);
        })
    })

    promise.then(result => {
        // console.log(result.id);
        advice.innerHTML = result.advice;
        if (advice.innerHTML.length > 99) {
            advice.style.fontSize = '1.3em';
        }

        const number = document.getElementById("number");
        number.innerHTML = '#' + result.id;
    })

});








        


