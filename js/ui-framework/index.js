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

    if (cssClass) {
        newElement.classList.add(cssClass);
    }

    return newElement;
}