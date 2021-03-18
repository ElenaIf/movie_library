const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";
const genre_id = "35";

const genreURL = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;

const imgPath = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("library");

getMovies(genreURL);

async function getMovies() {
  const resp = await fetch(genreURL);
  const respData = await resp.json();

  console.log(respData);

  showMovies(respData.results);
}

function showMovies(movies) {
  movies.forEach((movie) => {
    const { poster_path, title, id, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
            <img
                src="${imgPath + poster_path}"
                alt="${id}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

getMovies();

// Displaying each movie in details

document.onclick = function (event) {
  const movie_id = event.target.alt;
  console.log(movie_id);

  const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query`;


  fetch(movieURL)
    .then((res) => res.json())
    .then((urlData) => {
      const popWindow = document.createElement("div");
      popWindow.innerHTML = `<div class="modal-bg">
      //       <div class="modal">
      //         <img src="${urlData.poster_path}" alt="" />
      //         <h2>${urlData.title}</h2>
      //         <p class="date">${urlData.release_date}</p>
      //         <p class="description">${urlData.overview}</p>
      //         <span class="modal-close">X</span>
      //       </div>
      //     </div>`;
      console.log(urlData.poster_path);
      console.log(urlData.title);
      console.log(urlData.release_date);
      console.log(urlData.vote_average);
      console.log(urlData.overview);
    });
};

/****** INNER HTML MODAL STRUCTURE **********/
// innerHTML = `<div class="modal-bg">
//       <div class="modal">
//         <img src="${urlData.poster_path}" alt="" />
//         <h2>${urlData.title}</h2>
//         <p class="date">${urlData.release_date}</p>
//         <p class="description">${urlData.overview}</p>
//         <span class="modal-close">X</span>
//       </div>
//     </div>`;

/******* BASIC FUNCTION TO SWITCH ON/OFF MODAL **********/
// let modalBtn = document.querySelector;
// let modalBg = document.querySelector(".modal-bg");
// let modelClose = document.querySelector(".modal-close");

// modalBtn.addEventListener("click", function () {
//   modalBg.classList.add("bg-active");
// });
// modelClose.addEventListener("click", function () {
//   modalBg.classList.remove("bg-active");
// });

/******  CHEKING IF EVENTLISTENER WORKS *********/
// let clicked = document
//   .querySelector("#library")
//   .addEventListener("click", function () {
//     console.log("clicked");
//   });
