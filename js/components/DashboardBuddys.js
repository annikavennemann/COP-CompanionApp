import BuddyList from './DashboardBuddyList'

export default () => {

    const members = [
        {
            Vorname: 'Tine',
            Nachname: 'Krüger'
        },
        {
            Vorname: 'Marie',
            Nachname: 'Reese'
        },
    ]
    BuddyList(members);
}
