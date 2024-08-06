const API_KEY = 'api_key';
// Hiding API key due to privacy.
// Replace with API key.
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const DETAILS_URL = `https://api.themoviedb.org/3/movie/`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieContainer = document.getElementById('movie-container');
const movieModal = document.getElementById('movie-modal');
const modalContent = document.getElementById('modal-content');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

async function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        const movies = await fetchMovieData(query);
        displayMovies(movies);
    }
}

async function fetchMovieData(query) {
    try {
        const response = await fetch(API_URL + encodeURIComponent(query));
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return [];
    }
}

function displayMovies(movies) {
    movieContainer.innerHTML = '';
    
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'transition', 'duration-300', 'hover:shadow-xl', 'hover:scale-105');
        movieElement.innerHTML = `
            <img src="${movie.poster_path ? IMG_PATH + movie.poster_path : 'https://via.placeholder.com/500x750?text=No+Poster'}" alt="${movie.title}" class="w-full h-96 object-cover">
            <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">${movie.title}</h2>
                <p class="text-gray-600 mb-4">Release Year: ${movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
                <button class="more-info bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300" data-id="${movie.id}">More Info</button>
            </div>
        `;
        movieContainer.appendChild(movieElement);
    });
}

async function fetchMovieDetails(movieId) {
    try {
        const response = await fetch(`${DETAILS_URL}${movieId}?api_key=${API_KEY}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

movieContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('more-info')) {
        const movieId = e.target.dataset.id;
        const movieDetails = await fetchMovieDetails(movieId);
        if (movieDetails) {
            displayMovieDetails(movieDetails);
        }
    }
});

function displayMovieDetails(movie) {
    modalContent.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${movie.title}</h2>
        <div class="flex flex-col md:flex-row">
            <img src="${movie.poster_path ? IMG_PATH + movie.poster_path : 'https://via.placeholder.com/500x750?text=No+Poster'}" alt="${movie.title}" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6">
            <div>
                <p class="text-gray-700 mb-4">${movie.overview}</p>
                <p class="mb-2"><span class="font-semibold">Release Date:</span> ${movie.release_date}</p>
                <p class="mb-2"><span class="font-semibold">Rating:</span> ${movie.vote_average}/10</p>
                <p class="mb-2"><span class="font-semibold">Genres:</span> ${movie.genres.map(genre => genre.name).join(', ')}</p>
                <p class="mb-4"><span class="font-semibold">Runtime:</span> ${movie.runtime} minutes</p>
                <button id="close-modal" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">Close</button>
            </div>
        </div>
    `;
    movieModal.classList.remove('hidden');
    
    document.getElementById('close-modal').onclick = () => {
        movieModal.classList.add('hidden');
    };
}

// Close modal when clicking outside the content
movieModal.addEventListener('click', (e) => {
    if (e.target === movieModal) {
        movieModal.classList.add('hidden');
    }
});

// Initial search on page load (optional)
window.addEventListener('load', () => {
    searchInput.value = 'Inception'; // Example initial search
    performSearch();
});