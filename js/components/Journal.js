import JournalSection from './Journal/JournalSection'

export default () => {
    const journal = [
        {
            datum: 'yesterday',
            rating: 3,
            comprehension: 7,
            motto: "That's life in the city",
            notes: "Si sine causa? quae fuerit causa, \
            mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, \
            idque instituit docere sic omne animal, simul atque."
        },
        {
            datum: '23.10.2020',
            rating: 4,
            comprehension: 10,
            motto: "What a day",
            notes: "Si sine causa? quae fuerit causa, \
            mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, \
            idque instituit docere sic omne animal, simul atque."
        }

    ]
    JournalSection(journal)
}



