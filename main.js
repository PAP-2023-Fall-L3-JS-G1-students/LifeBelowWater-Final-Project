let form = document.querySelector("#form");

function generate(event) {
    event.preventDefault();

    let hours = document.querySelector("#hours").value;
    console.log(hours);

const container = document.querySelector("#form-background");
console.log(container);

    if (hours < 0) {
        container.innerHTML = "<div>Hey, that's not how time works 😠</div></br>";
    } 
        else if (hours < 2) {
        container.innerHTML = "<div>Educate yourself on ways you can reduce your carbon emissions and conserve water!</div>";
    }
        else if (hours >= 2 && hours < 4) {
        container.innerHTML = "<div>Spread the word and tell your friends and family about what they can do to help too!</div>";
    }
        else if (hours >= 4 && hours < 6) {
        container.innerHTML = "<div>Reach out to your local representatives!</div>";
    }
        else if (hours >= 6 && hours < 720) {
        container.innerHTML = "<div>Volunteer for a debris cleanup program! <br><br> Link to Puget Soundkeeper: https://pugetsoundkeeper.org/volunteer/</div>";
    }
        else {
        container.innerHTML = "<div>Hey, that's more hours than there are in a month, calm down 😠</div>";
        }
}

form.addEventListener("submit", generate);

