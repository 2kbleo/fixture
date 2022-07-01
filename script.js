const group1 = [{
  id: 0,
  name: 'Qatar',
  score: 0,
  dg: 0,
  pj: 0,
  win: 0,
  draw: 0,
  lost: 0,
  gf: 0,
  gc: 0,
  fin: 0
},
{
  id: 1,
  name: 'Ecuador',
  score: 0,
  dg: 0,
  pj: 0,
  win: 0,
  draw: 0,
  lost: 0,
  gf: 0,
  gc: 0,
  fin: 0
},
{
  id: 2,
  name: 'Senegal',
  score: 0,
  dg: 0,
  pj: 0,
  win: 0,
  draw: 0,
  lost: 0,
  gf: 0,
  gc: 0,
  fin: 0
},
{
  id: 3,
  name: 'Nederland',
  score: 0,
  dg: 0,
  pj: 0,
  win: 0,
  draw: 0,
  lost: 0,
  gf: 0,
  gc: 0,
  fin: 0
}
]
const partidos = [{
  id: 0,
  eA: 0,
  eB: 1,
  goalsA: 0,
  goalsB: 0
},
{
  id: 1,
  eA: 2,
  eB: 3,
  goalsA: 0,
  goalsB: 0
},
{
  id: 2,
  eA: 0,
  eB: 2,
  goalsA: 0,
  goalsB: 0
},
{
  id: 3,
  eA: 3,
  eB: 1,
  goalsA: 0,
  goalsB: 0
},

{
  id: 4,
  eA: 3,
  eB: 0,
  goalsA: 0,
  goalsB: 0
},
{
  id: 5,
  eA: 1,
  eB: 2,
  goalsA: 0,
  goalsB: 0
}]
// console.log(partidos);

function uploadMatch () {
  let match1, scoreA, scoreB, idMatch;
  scoreA = Number(document.getElementById('goalsA').value)
  scoreB = Number(document.getElementById('goalsB').value)
  idMatch = Number(document.getElementById('match').value)
  console.log('el partido es el numero: ', idMatch)
  match1 = partidos.find(r => r.id === idMatch)
  match1.goalsA = scoreA
  match1.goalsB = scoreB
  console.log(match1)
  console.log(partidos)
}

function updateTable (partidos, table) {
  partidos.forEach(element => {
    let wins, lose, goalW, goalL

    if (element.goalsA > element.goalsB) {
      wins = element.eA
      lose = element.eB
      goalW = element.goalsA
      goalL = element.goalsB
    } else if (element.goalsA < element.goalsB) {
      wins = element.eB
      lose = element.eA
      goalW = element.goalsB
      goalL = element.goalsA
    } else {
      const teamB = table.find(t => t.id === element.eB)
      const teamA = table.find(t => t.id === element.eA)
      teamA.score = teamA.score + 1
      teamB.score = teamB.score + 1
      teamA.draw = teamA.draw + 1
      teamB.draw = teamB.draw + 1
      teamA.pj = teamA.pj + 1
      teamB.pj = teamB.pj + 1
      teamA.gf = teamA.gf + element.goalsA
      teamB.gf = teamB.gf + element.goalsB
      teamA.gc = teamA.gc + element.goalsB
      teamB.gc = teamB.gc + element.goalsA
      teamA.dg = teamA.gf - teamA.gc
      teamA.dg = teamB.gf - teamB.gc
      return
    }

    const winss = table.find(r => r.id === wins)
    const lost = table.find(r => r.id === lose)

    winss.score = winss.score + 3
    winss.win = winss.win + 1
    winss.pj = winss.pj + 1
    winss.gf = winss.gf + goalW
    winss.gc = winss.gc + goalL
    winss.dg = winss.gf - winss.gc
    lost.lost = lost.lost + 1
    lost.gf = lost.gf + goalL
    lost.gc = lost.gc + goalW
    lost.dg = lost.gf - lost.gc
    lost.pj = lost.pj + 1
  })
}

function sortTableByField (table, field) {
  table.sort(function (x, y, j, k) {
    const firstScore = (x[field])
    const secondScore = (y[field])

    if (firstScore > secondScore) return -1
    return 0
  })
}

function sortTableByPoints (table) {
  sortTableByField(table, 'dg')
  sortTableByField(table, 'score')
}

console.log(partidos)
