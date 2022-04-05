import { MovieDetails } from "./views/MovieDetails.js";
import { MovieList } from "./views/MovieList.js";
import { NotFound } from './views/NotFound.js';

export const App = async () => {
    const routes = [
        { path: "/", view: await MovieList() },
        { path: "/movie", view: await MovieDetails() },
    ];

    const pageMatches = routes.map((route) => {
        return {
            route,
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        return NotFound();
    } else {
        return match.route.view;
    }
};