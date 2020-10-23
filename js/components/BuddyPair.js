import { createElement } from '../ui-framework'

export default (pair, parent) => {
    const buddyListElement = createElement('li', parent, 'buddy__pair')
    const buddyOne = createElement('p', buddyListElement, 'buddy', pair[0].Vorname)
    const buddyTwo = createElement('p', buddyListElement, 'buddy', pair[1].Vorname)
}