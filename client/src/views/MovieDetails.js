import { ParamsNotFound } from './ParamsNotFound.js';
import { MovieNotFound } from './MovieNotFound.js';
import { MovieService } from "../services/MovieService.js";
import { getSearchParams } from "../utils/getSearchParams.js";

export const MovieDetails = async () => {
    const movieService = new MovieService();
    const params = getSearchParams(['movieSeq', 'movieId']);

    if(!params[0] || !params[1]) {
        return ParamsNotFound;
    }

    const movieDetailItem = (await movieService.getMovieDetail(...params)).Data[0].Result[0];

    if(!movieDetailItem) {
        return MovieNotFound;
    }

    return (
        `<div>
            <a class="homeLink" href="/">Home</a>
            <ul class="movieDetailContainer">
                <li>DOCID: ${movieDetailItem.DOCID}</li>
                <li>Title: ${movieDetailItem.title}</li>
                <li>Genre: ${movieDetailItem.genre}</li>
                <li>Company: ${movieDetailItem.company}</li>
                <li>Runtime: ${movieDetailItem.runtime} minutes</li>
                <li>Nation: ${movieDetailItem.nation}</li>
                <li>ProdYear: ${movieDetailItem.prodYear}</li>
                <li>Staffs: ${movieDetailItem.staffs.staff.map((item) => item.staffNm).join(' | ')}</li>
            </ul>
        </div>`
    );
};