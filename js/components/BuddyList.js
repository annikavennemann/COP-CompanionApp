import { createElement } from '../ui-framework'
import BuddyPair from './BuddyPair'

export default (members) => {
    const buddySection = createElement('section', document.body, ['buddy-section', 'section-delete'])
    const buddyList = createElement('ul', buddySection, 'buddy__list')

    const buddyPairs = [
        members.slice(0, 2),
        members.slice(2, 4),
        members.slice(4, 6),
        members.slice(6, 8),
        members.slice(8, 10),
    ]

    buddyPairs.forEach((pair) => {
        BuddyPair(pair, buddyList)
    });
}