import { createElement } from '../ui-framework'

export default (team, parent) => {
    const buddyListElement = createElement('li', parent, 'buddy__pair--team')
    createElement('p', buddyListElement, ['buddy', 'buddy__one--team'], (team[0].Vorname + ' ' + team[0].Nachname))
    createElement('p', buddyListElement, ['buddy', 'buddy__two--team'], (team[1].Vorname + ' ' + team[1].Nachname))
    createElement('p', buddyListElement, ['buddy', 'buddy__three--team'], (team[2].Vorname + ' ' + team[2].Nachname))
    createElement('p', buddyListElement, ['buddy', 'buddy__four--team'], (team[3].Vorname + ' ' + team[3].Nachname))

}