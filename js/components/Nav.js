import { createElement } from '../ui-framework';
import Journal from './Journal';

export default function Nav(onClick) {
    const footer = createElement('footer', document.body, 'side__footer')
    const nav = createElement('nav', footer, 'nav__footer');
    const navList = createElement('ul', nav, 'nav_list', '');

    const navInfo = [
        {
            headline: 'Dashboard',
            subHeadline: null,
            class: 'nav__button--dashboard',
            href: '#dashboard'
        },
        {
            headline: 'Code Buddys',
            subHeadline: 'on Monday - 26.10.2020',
            class: 'nav__button--buddy',
            href: '#buddy'
        },
        {
            headline: 'Teams',
            subHeadline: 'for Exercise 1',
            class: 'nav__button--teams',
            href: '#teams'

        },
        {
            headline: 'Energy',
            subHeadline: null,
            class: 'nav__button--energy',
            href: '#energy'
        },
        {
            headline: 'Journal',
            subHeadline: null,
            class: 'nav__button--journal',
            href: '#journal',
            show: function() {
                return Journal()
            }
        }
    ]

    navInfo.forEach((title) => {
        const linkElement = createElement('li', navList, title.class);
        linkElement.setAttribute('data-href', title.href)
        // const iconNav = createElement('img', linkElement, 'nav__button--dashboard')
        // iconNav = title.source
        linkElement.addEventListener('click', function (event) {
            onClick(title.headline, title.subHeadline);
            title.show()
            
        });  
    });
}