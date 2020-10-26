import { createElement } from '../ui-framework';
import DashboardBuddys from './DashboardBuddys';

export default () => {
    const main = document.querySelector('main')
    const dashboardSection = createElement('section', main, 'section-delete')
    const divBuddys = createElement('div', dashboardSection)

    createElement('h2', divBuddys, 'global__headline2', 'Your Code Buddy for Today:');
    DashboardBuddys();

    const divTeam = createElement('div', dashboardSection)
    createElement('h2', divTeam, 'global__headline2', 'Your Current Team:') 

    
    
}