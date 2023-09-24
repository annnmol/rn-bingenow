import http from "./http";

let githubBaseUrl = process.env.EXPO_PUBLIC_GITHUB_API_URL;
let baseUrl = process.env.EXPO_PUBLIC_MOVIE_DB_API_URL;

export class ApiNetworkService {
  static getGithubUsers() {
    return http.get(`${githubBaseUrl}/${Endpoints.USERS}`);
  }

  static getMovies(endpoint: string) {
    return http.get(`${baseUrl}/${endpoint}`);
  }
}

//*ENDPOINTS *//
export class Endpoints {
  static USERS = "users";

  static DISCOVER_MOVIES = "discover/movie";
  static TRENDING_ALL = "trending/all/day";
  static NOW_PLAYING_MOVIES = "movie/now_playing";
  static POPULAR_MOVIES = "movie/popular";
  static TOP_RATED_MOVIES = "movie/top_rated";
  static UPCOMING_MOVIES = "movie/upcoming";
  static TRENDING_TV = "trending/tv/day";
  static SEARCH_All = "search/multi";
}

const errorImageUrl =
  "https://img.freepik.com/premium-vector/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg";

// functions to get images of different widths, (show images using these to improve the loading times)
export const movieImageUrl500 = (posterPath: string) =>
  posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : errorImageUrl;
export const movieImageUrl342 = (posterPath: string) =>
  posterPath ? "https://image.tmdb.org/t/p/w342" + posterPath : errorImageUrl;
export const movieImageUrl185 = (posterPath: string) =>
  posterPath ? "https://image.tmdb.org/t/p/w185" + posterPath : errorImageUrl;
export const movieImageUrlOriginal = (posterPath: string) =>
  posterPath
    ? "https://image.tmdb.org/t/p/original" + posterPath
    : errorImageUrl;
