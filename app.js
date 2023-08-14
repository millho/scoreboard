console.log('test')

let homeScore = 0

let awayScore = 0

function updateDomHome() {
    let homeElm = document.getElementById('homeScore')
    // @ts-ignore
    homeElm.innerHTML = homeScore
}

function updateDomAway() {
    let awayElm = document.getElementById('awayScore')
    // @ts-ignore
    awayElm.innerHTML = awayScore
}

function onePointHome() {
    homeScore += 1
    updateDomHome()
}

function onePointAway() {
    awayScore += 1
    updateDomAway()
}

function threePointHome() {
    homeScore += 3
    updateDomHome()
}

function threePointAway() {
    awayScore += 3
    updateDomAway()
}

function startOver() {
    homeScore = 0
    awayScore = 0
    updateDomHome()
    updateDomAway()
}

