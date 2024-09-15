const apiKey = 'ee2b37bc';

// Funtion to fetch and search for the movies
function searchMovies() {
    const searchQuery = document.querySelector('#searchInput').value;

    if (searchQuery.trim() === '') {
        alert('Enter Movie Title');
        return;
    }

    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`;

    // Display loading indicator before the fetch call
    const movieResultContainer = document.querySelector('#movieResults');
    movieResultContainer.innerHTML = `
                                    <div id="load">
                                    <p>Loading...</p>
                                    </div>`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                alert("Movie not found");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching movie data.');
        });
}


// Select the input field and add event listener
const input = document.getElementById('searchInput');
const inputSearch = (e) => {
    if (e.key === 'Enter') {
        searchMovies();
    }
}
// Add event listener to the input field
input.addEventListener('keypress', inputSearch);


// Function to display the results
function displayMovies(movies) {
    const movieResultContainer = document.querySelector('#movieResults');
    movieResultContainer.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movieCard'); // Add class to movie element
        movieElement.innerHTML =
            `
            <div id="movieImgBlock">
                <img src="${movie.Poster}" alt="${movie.Title} Poster"/>
            </div>
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
        `;

        movieResultContainer.appendChild(movieElement);
    });
};