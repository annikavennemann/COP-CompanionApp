import { createElement } from "../ui-framework"

export default () => {
    const headerAll = createElement('header', document.body, 'header__all');
    const headerTitle = createElement('h1', headerAll, 'header__title', 'Dashboard');
    const headerSubtitle = createElement('p', headerAll, 'header__subtitle', '')

    return {
        componentName: 'Header',
        update: function (newHeadline, newSubheadline) {
            headerTitle.textContent = newHeadline;
            headerSubtitle.textContent = newSubheadline;

            return 'the title just changed'
        },
    };
}

/*
<header>
    <h1 class="headline1__twolines">Teams</h1>
    <p class="header__sub-headline">for Exercise 1</p>
</header> 
*/