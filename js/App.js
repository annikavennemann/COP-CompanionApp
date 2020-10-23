import Header from './components/Header';
import Nav from './components/Nav'

export default () => {
    const headerComponent = Header();

    const members = [
        {
            Vorname: 'Tine',
            Nachname: 'Krüger'
        },
        {
            Vorname: 'Marie',
            Nachname: 'Reese'
        },
        {
            Vorname: 'Annika',
            Nachname: 'Vennemann'
        },
        {
            Vorname: 'Justin',
            Nachname: 'Timberlake'
        },
        {
            Vorname: 'Barak',
            Nachname: 'Obama'
        },
        {
            Vorname: 'Beyoncé',
            Nachname: 'Knowls'
        },
        {
            Vorname: 'Lady',
            Nachname: 'Gaga'
        },
        {
            Vorname: 'Mark',
            Nachname: 'Zuckerberg'
        },
        {
            Vorname: 'Elon',
            Nachname: 'Mask'
        },
        {
            Vorname: 'Steve',
            Nachname: 'Jobs'
        }
    ];

    Nav((headerTitle, headerSubtitle) => headerComponent.update(headerTitle, headerSubtitle))
}