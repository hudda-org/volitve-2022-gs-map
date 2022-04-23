const testPartiesColors = [
        {
            naz: 'ANDREJ ČUŠ IN ZELENI SLOVENIJE',
            shortName: 'ZELENI',
            hcol: '81D742',
            st: 1,
            gl: 9708,
            prc: 0.0109,
            man: 0,
            color: '#0605e3'
        },
        {
            naz: 'DeSUS – DEMOKRATIČNA STRANKA UPOKOJENCEV SLOVENIJE',
            shortName: 'DeSUS',
            hcol: '1CA5B8',
            st: 2,
            gl: 43889,
            prc: 0.0493,
            man: 5,
            color: '#af51cf'
        },
        {
            naz: 'DD DOBRA DRŽAVA',
            shortName: 'DD',
            hcol: '4AC9F6',
            st: 3,
            gl: 13540,
            prc: 0.0152,
            man: 0,
            color: '#7df892'
        },
        {
            naz: 'GAS - GOSPODARSKO AKTIVNA STRANKA',
            shortName: 'GAS',
            hcol: '2E83A2',
            st: 4,
            gl: 3132,
            prc: 0.0035,
            man: 0,
            color: '#d5bd25'
        },
        {
            naz: 'GIBANJE ZEDINJENA SLOVENIJA',
            shortName: 'Zsi',
            hcol: '669966',
            st: 5,
            gl: 5287,
            prc: 0.0059,
            man: 0,
            color: '#8a44c5'
        },
        {
            naz: 'GIBANJESKUPAJNAPREJ',
            shortName: 'GSN',
            hcol: 'FBB7D9',
            st: 6,
            gl: 4345,
            prc: 0.0049,
            man: 0,
            color: '#fb3dfc'
        },
        {
            naz: 'KANGLER & PRIMC  ZDRUŽENA DESNICA - GLAS ZA OTROKE IN DRUŽINE, NOVA LJUDSKA STRANKA',
            shortName: 'ZDRUŽENA DESNICA',
            hcol: 'B7DEE8',
            st: 7,
            gl: 2141,
            prc: 0.0024,
            man: 0,
            color: '#357f18'
        },
        {
            naz: 'LEVICA',
            shortName: 'LEVICA',
            hcol: 'F80000',
            st: 8,
            gl: 83108,
            prc: 0.0933,
            man: 9,
            color: '#f279d4'
        },
        {
            naz: 'LISTA MARJANA ŠARCA',
            shortName: 'LMŠ',
            hcol: '2D587B',
            st: 9,
            gl: 112250,
            prc: 0.126,
            man: 13,
            color: '#0292f0'
        },
        {
            naz: 'LISTA NOVINARJA BOJANA POŽARJA',
            shortName: 'LNBP',
            hcol: 'ED58A0',
            st: 10,
            gl: 7835,
            prc: 0.0088,
            man: 0,
            color: '#cfde86'
        },
        {
            naz: 'NAPREJ SLOVENIJA',
            shortName: 'NPS',
            hcol: 'CCC0DA',
            st: 11,
            gl: 187,
            prc: 0.0002,
            man: 0,
            color: '#e96b06'
        },
        {
            naz: 'NOVA SLOVENIJA - KRŠČANSKI DEMOKRATI',
            shortName: 'NSi',
            hcol: '0061D5',
            st: 12,
            gl: 63792,
            prc: 0.0716,
            man: 7,
            color: '#f260a4'
        },
        {
            naz: 'PIRATSKA STRANKA SLOVENIJE',
            shortName: 'PIRATI',
            hcol: '000000',
            st: 13,
            gl: 19182,
            prc: 0.0215,
            man: 0,
            color: '#d41734'
        },
        {
            naz: 'ReSET - REŠIMO SLOVENIJO ELITE IN TAJKUNOV',
            shortName: 'ReSET',
            hcol: '934939',
            st: 14,
            gl: 3672,
            prc: 0.0041,
            man: 0,
            color: '#1aaf1f'
        },
        {
            naz: 'SLOVENSKA DEMOKRATSKA STRANKA - SDS',
            shortName: 'SDS',
            hcol: 'FFE53F',
            st: 15,
            gl: 222042,
            prc: 0.2492,
            man: 25,
            color: '#fc047d'
        },
        {
            naz: 'SLS SLOVENSKA LJUDSKA STRANKA',
            shortName: 'SLS',
            hcol: '10A851',
            st: 16,
            gl: 23329,
            prc: 0.0262,
            man: 0,
            color: '#39e089'
        },
        {
            naz: 'SLOVENSKA NACIONALNA STRANKA - SNS',
            shortName: 'SNS',
            hcol: 'DA9694',
            st: 17,
            gl: 37182,
            prc: 0.0417,
            man: 4,
            color: '#611e2d'
        },
        {
            naz: 'SMC - STRANKA MODERNEGA CENTRA',
            shortName: 'SMC',
            hcol: '13314D',
            st: 18,
            gl: 86868,
            prc: 0.0975,
            man: 10,
            color: '#39965d'
        },
        {
            naz: 'SOCIALISTIČNA PARTIJA SLOVENIJE',
            shortName: 'SPS',
            hcol: '530282',
            st: 19,
            gl: 1551,
            prc: 0.0017,
            man: 0,
            color: '#164ca0'
        },
        {
            naz: 'SOCIALNI DEMOKRATI',
            shortName: 'SD',
            hcol: 'A62424',
            st: 20,
            gl: 88524,
            prc: 0.0993,
            man: 10,
            color: '#56cfa9'
        },
        {
            naz: 'SOLIDARNOST, ZA PRAVIČNO DRUŽBO',
            shortName: 'SOLIDARNOST',
            hcol: 'AB81FF',
            st: 21,
            gl: 2184,
            prc: 0.0025,
            man: 0,
            color: '#039e07'
        },
        {
            naz: 'SSN - STRANKA SLOVENSKEGA NARODA',
            shortName: 'SSN',
            hcol: '002060',
            st: 22,
            gl: 1237,
            prc: 0.0014,
            man: 0,
            color: '#a105ae'
        },
        {
            naz: 'STRANKA ALENKE BRATUŠEK',
            shortName: 'STRANKA AB',
            hcol: 'F3808A',
            st: 23,
            gl: 45492,
            prc: 0.0511,
            man: 5,
            color: '#6c3fda'
        },
        {
            naz: 'ZA ZDRAVO DRUŽBO',
            shortName: 'ZD',
            hcol: 'ADA702',
            st: 24,
            gl: 5548,
            prc: 0.0062,
            man: 0,
            color: '#57379d'
        },
        {
            naz: 'ZDRUŽENA LEVICA IN SLOGA',
            shortName: 'ZDRUŽENA LEVICA',
            hcol: 'F9AA06',
            st: 25,
            gl: 5072,
            prc: 0.0057,
            man: 0,
            color: '#5ab6c3'
        }
    ]
;