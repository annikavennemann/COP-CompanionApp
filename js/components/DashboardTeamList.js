import { createElement } from '../ui-framework'
import Teams from './Teams'

export default (members) => {
    
    const span = document.querySelector('span')
    const buddyList = createElement('ul', span, 'team__list--dashboard')

    const buddyTeams = [
        members.slice(0, 4)
    ]

    buddyTeams.forEach((team) => {
        Teams(team, buddyList)
    });
}