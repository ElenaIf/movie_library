const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";
const genre_id = "53";

const genreURL = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;

const imgPath = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("thriller-movies");

async function getMovies() {
  const resp = await fetch(genreURL);
  const data = await resp.json();

  console.log(data);

  showMovies(data.results);
}

function showMovies(movies) {
  movies.forEach((movie) => {
    const { poster_path, id, title } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
              <img
                  src="${imgPath + poster_path}"
                  alt="${id}"
              />
              <div class="movie-title">
                  <h3>${title}</h3>
              </div>

          `;

    main.appendChild(movieElement);
  });
}
getMovies();

// Displaying each movie in details

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
