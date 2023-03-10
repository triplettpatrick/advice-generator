'use strict';

//VARIABLE FOR API ENDPOINT
//VARIABLE FOR QUOTE
//VARIABLE FOR BUTTON
//VARIABLE FOR CARD CONTAINER
//FUNCTION
//BUTTON CLICK EVENT HANDLER
//NEW PROMISE FOR EACH CLICK
//REPLACE TEMPLATE WITH QUOTE AND ID OF QUOTE

const endpoint = "https://api.adviceslip.com/advice";

const advice = document.getElementById("advice");
const button = document.querySelector("a");

const card = document.querySelector(".card-container");

//need to grab the advice from the API
function getAdvice() { 
    return fetch(endpoint)
      .then(response => response.json()) //transform "blob" of data into promise that is resolved into JSON data
      .then(data => { //JSON data received broken down into quote being requested and Id of the quote
        return { 
            advice: data.slip.advice, //slip is object 
            id: data.slip.id
        }
    });
};

//So now we have a function that uses the fetch function to make a network request to the ADVICE SLIP API and returns the quote and the 
//Id of the quote

//Now we need to create logic that displays the quote and the Id of the quote when someone presses a button

button.addEventListener("click", function() { //create an event listener that is attached to the button in the HTML
    const promise = new Promise((resolve) => { //because I want a new quote to be displayed every time, create a promise variable that will 
        //be run when the button is clicked
        getAdvice().then(advice => { //each promise that is created is resolved or rejected
            resolve(advice);
            // console.log(advice);
        })
    })

    promise.then(result => { //resolved promises are transformed 
        // console.log(result.id);
        advice.innerHTML = result.advice; //they become innerHTML and quotes are accessed using the advice property since the functino
        //returns an "advice" and an "id"
        if (advice.innerHTML.length > 99) {
            advice.style.fontSize = '1.3em';
        }

        const number = document.getElementById("number");
        number.innerHTML = '#' + result.id;
    })

});








        


