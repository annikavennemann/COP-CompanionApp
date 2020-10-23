import {createElement} from './../ui-framework'

const journal = [
    {
        datum: 'yesterday',
        rating: 3,
        comprehension: 7,
        motto: "That's life in the city",
        notes: "Si sine causa? quae fuerit causa, \
        mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, \
        idque instituit docere sic omne animal, simul atque."
    },
    {
        datum: '23.10.2020',
        rating: 4,
        comprehension: 10,
        motto: "What a day",
        notes: "Si sine causa? quae fuerit causa, \
        mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, \
        idque instituit docere sic omne animal, simul atque."
    }

]

export default () => {
    const section = createElement('section')

    /*Button*/
    //Wie kann ich direkt mehrere Klassen einbauen?
    const rateTodayBtn = createElement('button', section, 'nav__button', 'Rate today')
    rateTodayBtn.classList.add('journal-entry__button')

    /*Journal-List*/
    const journalList = createElement('ul', section)

    /*Journal-Card*/
    journal.forEach((entry) => {
        const journalElement = createElement('li', journalList, 'journal-entry__card')
        const journalElementHeadline = createElement('h2', journalElement, 'journal-entry__card__title', entry.datum )
        journalElementHeadline.classList.add('global__headline2')

        /*Rating*/
        const journalElementRating = createElement('div', journalElement, 'journal-entry__item' )
        journalElementRating.classList.add('journal-entry__rating')
        const ratingHeadline = createElement('h3', journalElementRating, 'journal-entry__item__title', 'Rating:')
        const ratingStars = createElement('p', journalElementRating, '', entry.rating)

        /*Comprehension*/
        const journalElementComprehension = createElement('div', journalElement, 'journal-entry__item')
        journalElementComprehension.classList.add('journal-entry__comprehension')
        const comprehensionHeadline = createElement('h3', journalElementComprehension, 'journal-entry__item__title', 'Comprehension:')
        const ratingRectangles = createElement('p', journalElementComprehension, '', entry.comprehension)

        /*Motto*/
        const journalElementMotto = createElement('div', journalElement, 'journal-entry__item')
        journalElementMotto.classList.add('journal-entry__motto')
        const mottoHeadline = createElement('h3', journalElementMotto, 'journal-entry__item__title', 'Motto:')
        const mottoText = createElement('p', journalElementMotto, '', entry.motto)

        /*Notes*/
        const journalElementNotes = createElement('div', journalElement, 'journal-entry__item')
        journalElementNotes.classList.add('journal-entry__notes')
        const notesHeadline = createElement('h3', journalElementNotes, 'journal-entry__item__title', 'Notes:')
        const notesText = createElement('p', journalElementNotes, '', entry.notes)
    })



}