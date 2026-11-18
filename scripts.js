/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".message");

    let messageTimer;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter your email address.";
            message.style.color = "red";
        }
        else {
            message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
            message.style.color = "blue";
            emailInput.value = "";        
        }

        clearTimeout(messageTimer);
        setTimeout(function(){
            message.textContent = "";
        }, 5000);
    });
});