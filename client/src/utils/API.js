export const searchFilms = (query) => {
  return fetch(`http://www.omdbapi.com/?s=${query}`);
};
