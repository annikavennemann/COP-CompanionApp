import {createElement} from './../../ui-framework'

export default (journal, journalList) => {
    journal.forEach((entry) => {
        const journalElement = createElement('li', journalList, 'journal-entry__card')
        const journalElementHeadline = createElement('h2', journalElement, ['journal-entry__card__title', 'global__headline2'], entry.datum )

        /*Rating*/
        const journalElementRating = createElement('div', journalElement, ['journal-entry__item', 'journal-entry__rating'] )
        const ratingHeadline = createElement('h3', journalElementRating, 'journal-entry__item__title', 'Rating:')
        const ratingStars = createElement('p', journalElementRating, '', entry.rating)

        /*Comprehension*/
        const journalElementComprehension = createElement('div', journalElement, ['journal-entry__item', 'journal-entry__comprehension'])
        const comprehensionHeadline = createElement('h3', journalElementComprehension, 'journal-entry__item__title', 'Comprehension:')
        const ratingRectangles = createElement('p', journalElementComprehension, '', entry.comprehension)

        /*Motto*/
        const journalElementMotto = createElement('div', journalElement, ['journal-entry__item', 'journal-entry__motto'])
        const mottoHeadline = createElement('h3', journalElementMotto, 'journal-entry__item__title', 'Motto:')
        const mottoText = createElement('p', journalElementMotto, '', entry.motto)

        /*Notes*/
        const journalElementNotes = createElement('div', journalElement, ['journal-entry__item', 'journal-entry__notes'])
        const notesHeadline = createElement('h3', journalElementNotes, 'journal-entry__item__title', 'Notes:')
        const notesText = createElement('p', journalElementNotes, '', entry.notes)
    })

}