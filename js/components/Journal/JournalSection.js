import {createElement} from './../../ui-framework'
import JournalCard from './JournalCard'


export default (journal) => {
    const section = createElement('section')
    section.id = 'journal'

    //Button
    //Wie kann ich direkt mehrere Klassen einbauen?
    const rateTodayBtn = createElement('button', section, 'nav__button', 'Rate today')
    rateTodayBtn.classList.add('journal-entry__button')

    //Journal-List
    const journalList = createElement('ul', section, 'nav__journal-list')

    //Journal-Card
    JournalCard(journal, journalList)
    
}