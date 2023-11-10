let form = document.querySelector("#form");

function generate(event) {
    event.preventDefault();

    let hours = document.querySelector("#hours").value;
    console.log(hours);
}

form.addEventListener("submit", generate);