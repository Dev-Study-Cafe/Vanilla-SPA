export const MovieItem = (movieItem) => {
    return (
        `<ul class='movieItemContainer')" onclick="window.history.pushState({}, '', '/movie?movieSeq=${movieItem.movieSeq}&movieId=${movieItem.movieId}')">
            <li>DOCID: ${movieItem.DOCID}</li>
            <li>Title: ${movieItem.title}</li>
            <li>Genre: ${movieItem.genre}</li>
            <li>Company: ${movieItem.company}</li>
            <li>Runtime: ${movieItem.runtime} minutes</li>
            <li>Nation: ${movieItem.nation}</li>
        </ul>`
    )
}