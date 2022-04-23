let rezultati = [];
let parties = [];

// const mainParty = {
//     name: "Gibanje SVOBODA",
//     shortName: "SVOBODA!"
// };

const mainParty = {
    name: "LISTA MARJANA ŠARCA",
    shortName: "LMŠ"
};

const partiesColors = [
    {
        name: "Gibanje SVOBODA",
        shortName: "SVOBODA!",
        color: "#406ae1",
    },
    {
        name: "Levica",
        shortName: "Levica",
        color: "#ff0000",
    },
    {
        name: "Lista Marjana Šarca",
        shortName: "LMŠ",
        color: "#1980c6"
    },
    {
        name: "Nova Slovenija - krščanski demokrati",
        shortName: "NSi",
        color: "#01b5dd"
    },
    {
        name: "Piratska stranka",
        shortName: "Pirati",
        color: "#e15822"
    },
    {
        name: "Povežimo Slovenijo",
        shortName: "PoS",
        color: "#fed36b"
    },
    {
        name: "Slovenska demokratska stranka",
        shortName: "SDS",
        color: "#fef200"
    },
    {
        name: "Socialni demokrati",
        shortName: "SD",
        color: "#ce0f03"
    },
    {
        name: "Stranka Alenke Bratušek",
        shortName: "SAB",
        color: "#1c90ff"
    }
];

function getVotingResults(callback) {
    fetch('https://gs-volitve.herokuapp.com/dev')
        .then(response => response.json())
        .then(data => {
            rezultati = data;
            parties = data.slovenija;
            callback(data)})
}

function getResultsByAreaName(areaName) {
    for (let i = 0; i < rezultati.enote.length; i++) {
        const enota = rezultati.enote[i]
        const okraj = enota.okraji.find(okraj => okraj.naz === areaName);
        if (okraj) {
            return okraj.rez;
        }
    }
}

function getPartyColor(partyShortName) {
    return partiesColors.find(party => party.shortName === partyShortName)?.color;
}

function getLeaderPartyForArea(areaName) {
    const results = getResultsByAreaName(areaName);
    if (!results) {
        return {};
    }
    const leaderResults = results.sort((a, b) => b.gl - a.gl)[0];
    const leadingParty = parties.find(party => party.st === leaderResults.st);
    return {leaderResults, leadingParty};
}

function getPartyResultsByAreaName(partyShortName, areaName) {
    const party = parties.find(party => party.knaz === partyShortName);
    const results = getResultsByAreaName(areaName);
    if (!results) return null;

    const partyResults = results.filter(result => {
        return result.st === party.st;
    });

    if (!partyResults || partyResults.length === 0) return null;

    return partyResults[0];
}