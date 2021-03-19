const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";
const genre_id = "35";

const genreURL = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;

const imgPath = "https://image.tmdb.org/t/p/w1280";
let popUpWindow = document.querySelector("#modal");
const main = document.getElementById("library");
getMovies(genreURL);

function getMovies(genreURL) {
  fetch(genreURL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      showMovies(response.results);
      console.log(response);
    });
  // const resp = await fetch(genreURL);
  // const respData = await resp.json();
  // showMovies(respData.results);
  // console.log(respData.results);
}

function showMovies(movies) {
  movies.forEach((movie) => {
    const { poster_path, title, id, vote_average, overview } = movie;
    let array_of_stars = [];

    // Here I made some function to print stars based on rating, but did not like how it looks
    const numberOfStars = () => {
      let star = `⭐️`;

      while (array_of_stars.length < Math.floor(vote_average)) {
        array_of_stars.push(star);
      }
    };

    numberOfStars();

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

    const movieEl = document.createElement("div");
    movieEl.className = "movie";
    movieEl.id = id;
    movieEl.innerHTML = `
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

    main.appendChild(movieEl);
  });

  document.querySelectorAll(".movie > div").forEach((movieElement) => {
    movieElement.addEventListener("click", function (event) {
      const movie_id = event.target.alt;
      // console.log(movie_id);

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
          // console.log(urlData.poster_path);
          // console.log(urlData.title);
          // console.log(urlData.release_date);
          // console.log(urlData.vote_average);
          // console.log(urlData.overview);
        });
      // console.log("hello");
      // console.log(movieElement);

      popUpWindow.classList.toggle("modal-hidden");
    });
  });
}

function closeWindow() {
  popUpWindow.classList.remove("modal-hidden");
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

// Displaying each movie in details

// function PrintInPopUp(event) {
//   const movie_id = event.target.alt;
//   console.log(movie_id);

//   const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query`;

//   fetch(movieURL)
//     .then((res) => res.json())
//     .then((urlData) => {
//       const popWindow = document.createElement("div");
//       popWindow.innerHTML = `<div class="modal-bg">
//            <div class="modal">
//               <img src="${urlData.poster_path}" alt="" />
//               <h2>${urlData.title}</h2>
//               <p class="date">${urlData.release_date}</p>
//               <p class="description">${urlData.overview}</p>
//               <span class="modal-close">X</span>
//             </div>
//            </div>`;
//       console.log(urlData.poster_path);
//       console.log(urlData.title);
//       console.log(urlData.release_date);
//       console.log(urlData.vote_average);
//       console.log(urlData.overview);
//     });
// }

// document.querySelectorAll(".movie").forEach((el) => {
//   el.addEventListener("click", function () {
//     let numberPressed = this.innerHTML;
//     console.log("This is pressed movie" + numberPressed);
//     console.log("Hello from here!");
//   });
// });

/****** INNER HTML MODAL STRUCTURE **********/
// innerHTML = `<div class="modal-bg">
//        <div class="modal">
//         <img src="${urlData.poster_path}" alt="" />
//          <h2>${urlData.title}</h2>
//          <p class="date">${urlData.release_date}</p>
//         <p class="description">${urlData.overview}</p>
//          <span class="modal-close">X</span>
//        </div>
//      </div>`;

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

// /******  CHEKING IF EVENTLISTENER WORKS *********/
// let clicked = document.querySelector("#library").addEventListener("click", function () {
//   console.log("clicked");
// });

// let element1 = document.querySelectorAll(".movie");
// element1.forEach((el) => {
//   function1(el);
// });

// function function1(el) {
//   document.querySelector("#modal").classList.toggle("modal-hidden");
// }
