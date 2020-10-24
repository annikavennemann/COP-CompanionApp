import { createElement } from '../ui-framework';

export default () => {
    const main = document.querySelector('main')
    const dashboardSection = createElement('section', main, 'section-delete')

    createElement('h2', dashboardSection, 'global__headline2', 'Your Code Buddy for Today:')
    createElement('h2', dashboardSection, 'global__headline2', 'Your Current Team:') 

    
}