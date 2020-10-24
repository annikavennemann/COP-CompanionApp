import { createElement, deleteElement } from '../ui-framework';
import Journal from './Journal';
import Buddys from './Buddys'
import Energy from './Energy';

export default function Nav(onClick) {
    const footer = createElement('footer', document.body, 'side__footer')
    const nav = createElement('nav', footer, 'nav__footer');
    const navList = createElement('ul', nav, 'nav_list', '');

    const navInfo = [
        {
            headline: 'Dashboard',
            subHeadline: null,
            class: 'nav__button--dashboard',
            href: '#dashboard',
        },
        {
            headline: 'Code Buddys',
            subHeadline: 'on Monday - 26.10.2020',
            class: 'nav__button--buddy',
            href: '#buddy',
            show: function() {
                return Buddys()
            }
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
            href: '#energy',
            show: function() {
                return Energy()
            }
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
        linkElement.addEventListener('click', function (event) {
            onClick(title.headline, title.subHeadline);
            deleteElement('.section-delete')
            title.show()
            
        });  
    });
}