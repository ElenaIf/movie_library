

document.getElementById("searchButton").addEventListener("click", searchMovie);

function searchMovie(event) {
    event.preventDefault();
    const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";

    let search = document.getElementById("search").value;

    document.getElementById("search-movies").value = "";

    console.log(search);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;

    const imgPath = "https://image.tmdb.org/t/p/w1280";

    const main = document.getElementById("search-movies");

    async function getMovies() {
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);

        showMovies(data.results);
    }

    function showMovies(movies) {
        movies.forEach((movie) => {
            const { poster_path, title } = movie;

            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            if (poster_path) {

                movieElement.innerHTML = `
                <img
                    src="${imgPath + poster_path}"
                    alt="${title}"
                />
                <div class="movie-title">
                    <h3>${title}</h3>
                </div>
               
            `;

                main.appendChild(movieElement);
            }
        });
    }
    getMovies();

}
