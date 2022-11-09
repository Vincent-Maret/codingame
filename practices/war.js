const deck1 = []
const deck2 = []

const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1 = readline(); // the n cards of player 1
    deck1.push(getCardValue(cardp1[0]))
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const cardp2 = readline(); // the m cards of player 2
    deck2.push(getCardValue(cardp2[0]))
}

console.error(deck1, deck2)
console.error('working')

let turn = 0
let pot = []
while(deck1.length && deck2.length) {
    const p1 = deck1.shift()
    const p2 = deck2.shift()
    
    if (p1 === p2) {
        pot.push(p1, ...deck1.splice(0, 3), p2, ...deck2.splice(0, 3))
    } else if (p1 > p2) {
        deck1.push(...pot, p1, p2)
        pot = []
        turn++
    } else {
        deck2.push(...pot, p1, p2)
        pot = []
        turn++
    }
}

const winner = deck1.length ? 1 : 2
console.log(winner, turn)

function war(deck1, deck2) {
    const pot = [...deck1.splice(0, 3), ...deck2.splice(0, 3)]
}

function getCardValue(card) {
    switch(card) {
        case 'J':
            return 11
        case 'Q':
            return 12
        case 'K':
            return 13
        case 'A':
            return 14
        default:
            return Number(card)
    }
}