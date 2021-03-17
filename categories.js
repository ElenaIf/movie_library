const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";
/*
 Search URL = "`https://api.themoviedb.org/3/search/movie/?&api_key=${apiKey}&query=1`"

 genere_id = 35 genere_name: comdy

 genere_id = 18 genere_name: drama

 genere_id = 35 genere_name: action

 genere_id = 53 genere_name: thriller

 genere_id = 14 genere_name: fantasty

*/
function callingComedies() {
  const genre_id = "35";

  const genreURL = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;

  const imgPath = "https://image.tmdb.org/t/p/w1280";

  const main = document.getElementById("comedy-movies");

  async function getMovies() {
    const resp = await fetch(genreURL);
    const data = await resp.json();

    console.log(data);

    showMovies(data.results);
  }

  function showMovies(movies) {
    movies.forEach((movie) => {
      const { poster_path, title } = movie;

      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

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
    });
  }
  getMovies();
}
callingComedies();

function callingDramas() {
  const genre_id = "18";

  const genreURL = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;

  const imgPath = "https://image.tmdb.org/t/p/w1280";

  const main = document.getElementById("drama-movies");

  async function getMovies() {
    const resp = await fetch(genreURL);
    const data = await resp.json();

    console.log(data);

    showMovies(data.results);
  }

  function showMovies(movies) {
    movies.forEach((movie) => {
      const { poster_path, title } = movie;

      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

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
    });
  }
  getMovies();
}
callingDramas();

function callingThrillers() {
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
      const { poster_path, title } = movie;

      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

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
    });
  }
  getMovies();
}
callingThrillers();

function callingActions() {
  const genre_id = "35";

  const genreURL = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;

  const imgPath = "https://image.tmdb.org/t/p/w1280";

  const main = document.getElementById("action-movies");

  async function getMovies() {
    const resp = await fetch(genreURL);
    const data = await resp.json();

    console.log(data);

    showMovies(data.results);
  }

  function showMovies(movies) {
    movies.forEach((movie) => {
      const { poster_path, title } = movie;

      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

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
    });
  }
  getMovies();
}
callingActions();

function callingFantasy() {
  const genre_id = "14";

  const genreURL = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;

  const imgPath = "https://image.tmdb.org/t/p/w1280";

  const main = document.getElementById("fantasy-movies");

  async function getMovies() {
    const resp = await fetch(genreURL);
    const data = await resp.json();

    console.log(data);

    showMovies(data.results);
  }

  function showMovies(movies) {
    movies.forEach((movie) => {
      const { poster_path, title } = movie;

      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

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
    });
  }
  getMovies();
}
callingFantasy();
