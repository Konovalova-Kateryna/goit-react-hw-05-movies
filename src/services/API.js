import axios from 'axios';

const API_KEY = 'cd467bf58867975fca1c146cba682fc3';
const BASE_URL = 'https://api.themoviedb.org/3';

// axios.defaults.baseURL = BASE_URL;

export const getTrendingMoovies = async () => {
  // type:all, movie, tv, person;
  // time: day, week;
  const responce = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return responce.data;
};

//api.themoviedb.org/3/trending/movie/day?api_key=cd467bf58867975fca1c146cba682fc3

export const getSearchQuery = async searchQuery => {
  const responce = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&language=en-US`
  );
  console.log(responce.data);
  return responce.data;
};

export const getMovieById = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return responce.data;
};

export const getMovieCast = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return responce.data;
};

export const getMovieReviews = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return responce.data;
};

// https://api.themoviedb.org/3/search/company?api_key=cd467bf58867975fca1c146cba682fc3&query={поиск запрос}&page={страница}

// /trending/get-trending {/trending/{media_type}/{time_window}} список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
