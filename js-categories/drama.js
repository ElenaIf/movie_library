const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";
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
