const root = document.getElementById('root');

export const rootAppendChild = (child) => {
    const span = document.createElement('span');
    span.innerHTML = child;
    
    root.replaceChildren(span);
}