import { createElement } from '../ui-framework'

export default (pair, parent) => {
    const buddyListElement = createElement('li', parent, 'buddy__pair')
    const buddyOne = createElement('p', buddyListElement, ['buddy', 'buddy__one'], (pair[0].Vorname + ' ' + pair[0].Nachname))
    const plusIconSvg = createElement('div', buddyListElement, 'buddy__plus-icon')
    const buddyTwo = createElement('p', buddyListElement, ['buddy', 'buddy__two'], (pair[1].Vorname + ' ' + pair[1].Nachname))




// plusIconSvg.setAttribute('viewBox','0 0 21 21');
// plusIconSvg.setAttribute('width','21px');
// plusIconSvg.setAttribute('height','21px')
// plusIconSvg.setAttribute('fill','currentColor')
// plusIconSvg.setAttribute('version','1.1')
// plusIconSvg.setAttribute('xmlns','http://www.w3.org/2000/svg')

// plusIconPath.setAttribute('d', "M10.1666667,-7.10542736e-15 C11.2210285,-7.10542736e-15 12.0848318,0.815877791 12.1611809,1.85073766 L12.1666667,2 L12.1666667,8.16566667 L18.3333333,8.16666667 C19.4379028,8.16666667 20.3333333,9.06209717 20.3333333,10.1666667 C20.3333333,11.2210285 19.5174555,12.0848318 18.4825957,12.1611809 L18.3333333,12.1666667 L12.1666667,12.1656667 L12.1666667,18.3333333 C12.1666667,19.4379028 11.2712362,20.3333333 10.1666667,20.3333333 C9.11230487,20.3333333 8.24850154,19.5174555 8.1721524,18.4825957 L8.16666667,18.3333333 L8.16666667,12.1656667 L2,12.1666667 C0.8954305,12.1666667 3.01980663e-14,11.2712362 3.01980663e-14,10.1666667 C3.01980663e-14,9.11230487 0.815877791,8.24850154 1.85073766,8.1721524 L2,8.16666667 L8.16666667,8.16566667 L8.16666667,2 C8.16666667,0.8954305 9.06209717,-7.10542736e-15 10.1666667,-7.10542736e-15 Z" )
// plusIconPath.id = 'Path'
}