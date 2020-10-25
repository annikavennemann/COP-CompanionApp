import {createElement, createSvg, colorIcon} from './../../ui-framework'

export default (journal, svg, journalList) => {
    journal.forEach((entry) => {
        const journalElement = createElement('li', journalList, 'journal-entry__card')
        const journalElementHeadline = createElement('h2', journalElement, ['journal-entry__card__title', 'global__headline2'], entry.datum )

        /*Rating*/
        const journalElementRating = createElement('div', journalElement, ['journal-entry__item', 'journal-entry__rating'] )
        const ratingHeadline = createElement('h3', journalElementRating, 'journal-entry__item__title', 'Rating:')
        const journalElementRatingIcons = createElement('div', journalElementRating, 'svg-container')

        /*Star*/
        const ratingStarsSvg = createSvg(Object.values(svg.star), Object.values(svg.star.path), 'path')
        ratingStarsSvg.classList.add('journal-entry__star') //kann noch in die createSvg-Funktion verschoben werden
        for (let i = 1; i < 6; i++) {
            const star = journalElementRatingIcons.appendChild(ratingStarsSvg.cloneNode(true)) 
        }

        colorIcon(journalElementRatingIcons, (entry.rating +1), 'journal-entry__icon--light')
        
        /*Comprehension*/
        const journalElementComprehension = createElement('div', journalElement, ['journal-entry__item', 'journal-entry__comprehension'])
        const comprehensionHeadline = createElement('h3', journalElementComprehension, 'journal-entry__item__title', 'Comprehension:')
        const journalElementComprehensionIcons = createElement('div', journalElementComprehension, 'svg-container')
        
        /*Rectangle*/
        const rectangleSvg = createSvg(Object.values(svg.rectangle), Object.values(svg.rectangle.path), 'rect')
        rectangleSvg.classList.add('journal-entry__icon') //kann noch in die createSvg-Funktion verschoben werden
        for (let i = 1; i < 11; i++) {
            const star = journalElementComprehensionIcons.appendChild(rectangleSvg.cloneNode(true)) 
        }

        colorIcon(journalElementComprehensionIcons, (entry.comprehension +1), 'journal-entry__icon--light')

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