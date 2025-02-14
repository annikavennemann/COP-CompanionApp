import { createElement } from '../ui-framework'

export default (pair, parent) => {
    const buddyListElement = createElement('li', parent, 'buddy__pair')
    const buddyOne = createElement('p', buddyListElement, ['buddy', 'buddy__one'], (pair[0].Vorname + ' ' + pair[0].Nachname))
    const plusIconSvg = createElement('div', buddyOne, 'buddy__plus-icon')
    const buddyTwo = createElement('p', buddyListElement, ['buddy', 'buddy__two'], (pair[1].Vorname + ' ' + pair[1].Nachname))

}