import { createElement } from '../ui-framework';
import DashboardBuddys from './DashboardBuddys';
import DashboardTeamBuddys from './DashboardTeamBuddys';

export default () => {
    const main = document.querySelector('main')
    const dashboardSection = createElement('section', main, 'section-delete')
    const divBuddys = createElement('div', dashboardSection)

    createElement('h2', divBuddys, 'global__headline2', 'Your Code Buddy for Today:');
    DashboardBuddys();

    const spanTeam = createElement('span', dashboardSection)
    createElement('h2', spanTeam, 'global__headline2', 'Your Current Team:') 
    DashboardTeamBuddys()
}