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

export function deleteElement(delClass) {
    const delSections = document.querySelectorAll(delClass)
            delSections.forEach((section) => {
                section.remove()
            })
}


export function createSvg(svgAttributes, pathAttributes, shape) {
    const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    settingAttributes( svgAttributes, newSvg)
    const newPath = document.createElementNS("http://www.w3.org/2000/svg", shape)
    settingAttributes( pathAttributes, newPath)
    newSvg.appendChild(newPath)
    return newSvg
}

export function settingAttributes(attributeList, svg) {
    const attributes = attributeList
    attributes.pop()
    attributes.forEach((attribute) => {
        svg.setAttribute(attribute[0],attribute[1] )
    })
}

/*cssClass.forEach((class) => {
    newElement.classList.add(class)
})*/


