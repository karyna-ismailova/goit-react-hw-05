import axios from "axios";
const ACCESS_KEY = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGU1ZmU3NTFmNTU3YjIzMDgyOTY1ZGYwYmQxZTkwNSIsIm5iZiI6MS43NDY5MTcxNzM1MTAwMDAyZSs5LCJzdWIiOiI2ODFmZDczNTIxOWI4ZTlhN2I3Mzg5YzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.trJ1YJSYm9CeYajKLavyBGorN3DlVW0E11Zy9GQo0Rg`;
const BASE_URL = "https://api.themoviedb.org/3";

const options = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: ACCESS_KEY,
  },
});

export const fetchMovies = async (query) => {
  const response = await options.get("/search/movie", { params: { query } });
  return response.data.results;
};

export const trendingMovies = async () => {
  const response = await options.get("/trending/movie/day");
  return response.data.results;
};
export const trendingMoviesById = async (movieId) => {
  const response = await options.get(`/movie/${movieId}`);
  return response.data;
};
export const fetchCastById = async (movieId) => {
  const response = await options.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};
export const fetchReviewsById = async (movieId) => {
  const response = await options.get(`/movie/${movieId}/reviews`);

  return response.data.results;
};
