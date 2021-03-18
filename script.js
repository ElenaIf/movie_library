// Selecting DOM Elements.
const search = document.querySelector("#search-movie");
const comedy = document.querySelector("#comedy-movies");
const drama = document.querySelector("#drama-movies");
const action = document.querySelector("#action-movies");
const thriller = document.querySelector("#thriller-movies");
const fantasty = document.querySelector("#fantasty-movies");

// API Key information.
const apiKey = "6c4e73bcf355ac113f00af4502b19d6b";

//const genre_id;
//const url = `https://api.themoviedb.org/3/genre/${genre_id}/movies?&api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc&query?`;
//console.log(url)

/*
 genere_ids = 35 genere_name: comdy

 genere_ids = 18 genere_name: drama

 genere_ids = 28 genere_name: action

 genere_ids = 53 genere_name: thriller

 genere_ids = 14 genere_name: fantasty
*/

const url = `https://api.themoviedb.org/3/search/movie/?&api_key=${apiKey}&query=1`;
console.log(url);
const imgPath = "https://image.tmdb.org/t/p/w1280";
const main = document.querySelector("main");

async function getMovies() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  data.results.array.forEach((movie) => {
    const { poster_path, title, vote_average } = movie;
    const movieElement = document.createElement("div");
    movieElement = `
      <img
      src="${imgPath + poster_path}"
      alt="${title}"
      />
      <div class="movie-info">
      <h3>${title}</h3>
      <span>${vote_average}</span>

      `;
    main.appendChild(movieElement);
  });

  return data;
}

getMovies();
