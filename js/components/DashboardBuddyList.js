import { createElement } from '../ui-framework'
import BuddyPair from './BuddyPair'

export default (members) => {
    
    const div = document.querySelector('div')
    const buddyList = createElement('ul', div, 'buddy__list--dashboard')

    const buddyPairs = [
        members.slice(0, 2)
    ]

    buddyPairs.forEach((pair) => {
        BuddyPair(pair, buddyList)
    });
}