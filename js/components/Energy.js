import { createElement } from '../ui-framework'

export default () => {
    const main = document.querySelector('main')
    const energySection = createElement('section', main, 'section-delete')
    energySection.id = 'energy'
    
    createElement('h2', energySection, 'global__headline2', 'Energy Level throughout the day')
    createElement('img', energySection, 'energy__grafic')
    createElement('h2', energySection, 'global__headline2', 'Rate your current energy level')
    createElement('div', energySection, 'energy__rating')
    createElement('button', energySection, 'energylevel__button--100', '100%')
    createElement('button', energySection, 'energylevel__button--75', '75%')
    createElement('button', energySection, 'energylevel__button--50', '50%')
    createElement('button', energySection, 'energylevel__button--25', '25%')

}

