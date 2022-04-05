import { HOME_MOVIE_LIST, SEARCH_MOVIE_DETAIL } from "../constants/endpoint.js";

export class MovieService {
    async getMovieList() {
        return await fetch(HOME_MOVIE_LIST())
            .then(res => res.json());
    }

    async getMovieDetail(movieSeq, movieId) {
        return await fetch(SEARCH_MOVIE_DETAIL(movieSeq, movieId))
            .then(res => res.json());
    }
}