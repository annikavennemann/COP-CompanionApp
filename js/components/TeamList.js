import { createElement } from '../ui-framework'
import Teams from './Teams'

export default (members) => {
    const main = document.querySelector('main')
    const teamSection = createElement('section', main, 'section-delete')
    teamSection.id = 'teams'
    const buddyList = createElement('ul', teamSection, 'team__list')

    const buddyTeams = [
        members.slice(0, 4)
    ]

    buddyTeams.forEach((team) => {
        Teams(team, buddyList)
    });
}