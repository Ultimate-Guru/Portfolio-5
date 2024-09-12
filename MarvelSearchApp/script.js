let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

let date = new Date();
console.log(date.getTime());

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashValue];

// Debounce function to delay API calls while typing
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function displayWords(value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    listContainer.innerHTML = "";
}

input.addEventListener("keyup", debounce(async () => {
    removeElements();
    if (input.value.length < 4) {
        return;
    }

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`;

    try {
        const response = await fetch(url);
        const jsonData = await response.json();

        jsonData.data["results"].forEach((result) => {
            let name = result.name;
            let div = document.createElement("div");
            div.style.cursor = "pointer";
            div.classList.add("autocomplete-items");
            div.setAttribute("onclick", `displayWords('${name}')`);
            let word = `<b>${name.substr(0, input.value.length)}</b>${name.substr(input.value.length)}`;
            div.innerHTML = `<p class="item">${word}</p>`;
            listContainer.appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}, 500)); // 500ms debounce delay

button.addEventListener("click", async () => {
    if (input.value.trim().length < 1) {
        alert("Input cannot be blank");
        return;
    }
    showContainer.innerHTML = "";

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

    try {
        const response = await fetch(url);
        const jsonData = await response.json();

        jsonData.data["results"].forEach((element) => {
            const cardHTML = `
                <div class="card-container">
                    <div class="container-character-image">
                        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}" />
                    </div>
                    <div class="character-name">${element.name}</div>
                    <div class="character-description">${element.description || 'Description not available'}</div>
                </div>`;
            showContainer.insertAdjacentHTML('beforeend', cardHTML); // Use insertAdjacentHTML to append cards
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

// Fetch results on page load if necessary
window.onload = async () => {
    if (input.value.trim()) {
        button.click();
    }
};
