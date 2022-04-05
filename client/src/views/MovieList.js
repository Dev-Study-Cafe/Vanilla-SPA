import { MovieItem } from '../components/MovieItem.js';
import { MovieService } from '../services/MovieService.js';

export const MovieList = async () => {
    const movieService = new MovieService();

    const movieList = await movieService.getMovieList();

    return (
        `<div>
            TotalCount: ${movieList.TotalCount}
            ${movieList.Data[0].Result.map((movieItem) => (
                MovieItem(movieItem)
            )).join('')}
        </div>`
    );
};