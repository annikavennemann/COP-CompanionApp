import { createElement } from '../ui-framework'

export default (team, parent) => {
    const buddyListElement = createElement('li', parent, 'buddy__pair')
    createElement('p', buddyListElement, ['buddy', 'buddy__one'], (team[0].Vorname + ' ' + team[0].Nachname))
    createElement('p', buddyListElement, ['buddy', 'buddy__two'], (team[1].Vorname + ' ' + team[1].Nachname))
    createElement('p', buddyListElement, ['buddy', 'buddy__three'], (team[2].Vorname + ' ' + team[2].Nachname))
    createElement('p', buddyListElement, ['buddy', 'buddy__four'], (team[3].Vorname + ' ' + team[3].Nachname))

}