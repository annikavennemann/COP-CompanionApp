import { createElement } from '../ui-framework';

export default function Nav(onClick) {
    const nav = createElement('nav', document.body, '', '');
    const navList = createElement('ul', nav, '', '');

    const hTitle = ['Dashboard', 'Code Buddys', 'Teams', 'Energy', 'Journal'];
    const hSubtitle = ['', 'on Monday - 26.10.2020', 'for Exercise 1', '', ''];

    hSubtitle.forEach(subHeadline => {
        hTitle.forEach((headline) => {
            console.log(headline, subHeadline)
            // const linkElement = createElement('li', navList, '', headline);
            // linkElement.addEventListener('click', function (event) {
            //     onClick(headline);
            // });
        });  
    });
}

// m.forEach(k => {
//     n.forEach(i => {
//         console.log(i, k)
//     });
// };