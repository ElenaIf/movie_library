

document.getElementById("searchButton").addEventListener("click", searchMovie);

let childCalculator = 0;


function searchMovie(event) {
    event.preventDefault();
    const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";

    let search = document.getElementById("search").value;

    console.log(search);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;

    const imgPath = "https://image.tmdb.org/t/p/w1280";



    const main = document.getElementById("library");

    document.getElementById("search").value = "";



    for (let i = 0; i < childCalculator; i++) {

        main.removeChild(main.childNodes[0]);

    }

    childCalculator = 0;


    async function getMovies() {
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);

        showMovies(data.results);
    }

    function showMovies(movies) {
        movies.forEach((movie) => {
            const { poster_path, title, id, vote_average, overview } = movie;

            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            if (poster_path) {

                movieElement.innerHTML = `
                <img
                    src="${imgPath + poster_path}"
                    alt="${id}"
                />
                <div class="movie-info">
                    <h3>${title}</h3>
                </div>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
              </div>
              <div class="overview">
                  <h3>Overview:</h3>
                  ${overview}
              </div>
               
            `;


                main.appendChild(movieElement);
                childCalculator++;
            }
        });
        function getClassByRate(vote) {
            if (vote >= 8) {
                return "green";
            } else if (vote >= 5) {
                return "orange";
            } else {
                return "red";
            }
        }
    }



    getMovies();

}

document.onclick = function (event) {
    const movie_id = event.target.alt;
    console.log(movie_id);
    const movieURL = `http://api.themoviedb.org/3/movie/${movie_id}?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query`;


    fetch(movieURL)
        .then((res) => res.json())
        .then((urlData) => {
            console.log(urlData.poster_path);
            console.log(urlData.title);
            console.log(urlData.release_date);
            console.log(urlData.vote_average);
            console.log(urlData.overview);
        });
};

