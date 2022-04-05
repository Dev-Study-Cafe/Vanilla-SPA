const ServiceKey = 'IA5G27MEGU171NZ6S0SZ';
const BASE = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?ServiceKey=${ServiceKey}`;

export const HOME_MOVIE_LIST = () => `${BASE}&collection=kmdb_new2&startCount=0&listCount=10`;
export const SEARCH_MOVIE_DETAIL = (movieSeq, movieId) => `${BASE}&collection=kmdb_new2&movieSeq=${movieSeq}&movieId=${movieId}`;