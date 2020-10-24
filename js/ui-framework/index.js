export function createElement(
    tag,
    parentHtmlElement = document.body,
    cssClass = null,
    text = null
) {
    const newElement = document.createElement(tag);
    parentHtmlElement.appendChild(newElement);

    if (text) {
        newElement.textContent = text;
    }


    if ( Array.isArray(cssClass) ) {
        cssClass.forEach((currywurst) => {
            newElement.classList.add(currywurst)
        }) 
    } else if ( cssClass ) {
        newElement.classList.add(cssClass)
    }


    return newElement;
}