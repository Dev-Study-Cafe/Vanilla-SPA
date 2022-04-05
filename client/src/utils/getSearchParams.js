export const getSearchParams = (paramList) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const params = paramList.map((item) => {
        return urlParams.get(item);
    });

    return params;
}