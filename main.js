let jokeTextEl = document.getElementById('jokeText');
let jokeBtnEl = document.getElementById('jokeBtn');
let spinnerEl = document.getElementById('spinner');

function getRandomJoke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            let randomJoke = jsonData.value;
            jokeTextEl.textContent = randomJoke;
        })
}