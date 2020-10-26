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

    const svg = {
        star: {
            width: ['width','25px'],
            height: ['height','24px'],
            strokeWidth: ['stroke-width','1'],
            fill: ['fill','currentColor'],
            viewBox: ['viewBox','0 0 25 24'],
            xmlns: ['xmlns','http://www.w3.org/2000/svg'],
            path: {
                d: ['d','M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z'],
                id: "Path"
            }

        },
        rectangle: {
            width: ['width','22px'],
            height: ['height','22px'],
            strokeWidth: ['stroke-width','1'],
            fill: ['fill','currentColor'],
            viewBox: ['viewBox','0 0 22 22'],
            xmlns: ['xmlns','http://www.w3.org/2000/svg'],
            path: {
                transform: ['transform', 'translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) '],
                x: ['x', '0'],
                y: ['y', '0'],
                width: ['width', '22'],
                height: ['height', '22'],
                rx: ['rx', '4'],
                id: "Rectangle-Copy-6"
            }

        }
    }
    
    JournalSection(journal, svg)
}



