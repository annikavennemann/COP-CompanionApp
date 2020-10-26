import DashboardTeamList from './DashboardTeamList';

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
        {
            Vorname: 'Annika',
            Nachname: 'Vennemann'
        },
        {
            Vorname: 'Justin',
            Nachname: 'Timberlake'
        }
    ]
    DashboardTeamList(members);
}
