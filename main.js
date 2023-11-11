let form = document.querySelector("#form");

function generate(event) {
    event.preventDefault();

    let hours = document.querySelector("#hours").value;
    console.log(hours);

const container = document.querySelector("#form-background");
console.log(container);

    if (hours < 2) {
        container.innerHTML = "<br><br><br><br>Educate yourself on ways you can reduce your carbon emissions and conserve water!";
    }
        else if (hours >= 2 && hours < 4) {
        container.innerHTML = "<br><br><br><br>Spread the word and tell your friends and family about what they can do to help too!";
    }
        else if (hours >= 4 && hours < 6) {
        container.innerHTML = "<br><br><br><br><br>Reach out to your local representatives!";
    }
        else {
        container.innerHTML = "<br><br><br>Volunteer for a debris cleanup program! <br><br> Link to Puget Soundkeeper: https://pugetsoundkeeper.org/volunteer/ ";
        }
}

form.addEventListener("submit", generate);

