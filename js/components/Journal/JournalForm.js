import { createElement } from "../../ui-framework";

export default function() {
    const main = document.querySelector('main')
    const formSection = createElement('section', main, ['section-delete'])
    const form = createElement('form', formSection)
    const inputField = createElement('input', form)


    
}