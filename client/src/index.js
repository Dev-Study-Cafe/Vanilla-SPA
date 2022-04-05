import { App } from './App.js';
import { rootAppendChild } from './utils/rootReplaceChildren.js';

document.body.addEventListener("click", async (e) => {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    rootAppendChild(await App());
});

document.addEventListener("DOMContentLoaded", async () => {
    rootAppendChild(await App());
});

window.addEventListener("popstate", async () => {
    rootAppendChild(await App());
});
