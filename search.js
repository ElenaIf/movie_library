document.getElementById("searchButton").addEventListener("click", searchMovie);

let childCalculator = 0;

let popUpWindow = document.querySelector("#modal");

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

      let star_number;

      let vote_average_floored = Math.floor(vote_average);

      switch (vote_average_floored) {
        case 1:
          star_number = 1;
          break;
        case 2:
          star_number = 2;
          break;
        case 3:
          star_number = 3;
          break;
        case 4:
          star_number = 4;
          break;
        case 5:
          star_number = 5;
          break;
        case 6:
          star_number = 6;
          break;
        case 7:
          star_number = 7;
          break;
        case 8:
          star_number = 8;
          break;
        case 9:
          star_number = 9;
          break;
        case 10:
          star_number = 10;
          break;
        default:
          star_number = 1;
      }

      if (poster_path) {
        movieElement.innerHTML = `
        <div>
                <img
                    src="${imgPath + poster_path}"
                    alt="${id}"
                />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <div class="${getClassByRate(vote_average)}">${vote_average}</div>
              </div>
              <div class="overview">
              <img src="/categories pictures/stars/star${star_number}.svg">
              </div>
              </div>
            `;

        main.appendChild(movieElement);
        childCalculator++;
      }
    });

    document.querySelectorAll(".movie > div").forEach((movieElement) => {
      movieElement.addEventListener("click", function (event) {
        const movie_id = event.target.alt;

        const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query`;

        fetch(movieURL)
          .then((res) => res.json())
          .then((urlData) => {
            popUpWindow.innerHTML = `
            <div class = "individual-movie-content">
            <img src="${imgPath}/${urlData.poster_path}" />
            <div class="individual-movie-data">
              <h2>${urlData.title}</h2>
              <p class="individual-movie-date">${urlData.release_date}</p>
              <p class="individual-movie-description">${urlData.overview}</p>
              <span id="modal-close" onclick="closeWindow()">X</span>
            </div>
            </div>
              `;
          });

        popUpWindow.classList.toggle("modal-hidden");
      });
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

function closeWindow() {
  popUpWindow.classList.remove("modal-hidden");
}
