import {createElement} from './../../ui-framework'
import JournalCard from './JournalCard'


export default (journal) => {
    const main = document.querySelector('main')
    const section = createElement('section', main, 'section-delete')
    section.id = 'journal'

    //Button
    const rateTodayBtn = createElement('button', section, ['nav__button', 'journal-entry__button'], 'Rate today')

    //Journal-List
    const journalList = createElement('ul', section, 'nav__journal-list')

    //Journal-Card
    JournalCard(journal, journalList)
    
}