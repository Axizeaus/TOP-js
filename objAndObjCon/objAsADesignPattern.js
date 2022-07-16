const playerOneName = 'Tim'
const playerTwoName = 'Jen'
const playerOneMarker = 'X'
const playerTwoMarker = 'O'

const playerOne = {
    name : 'Tim', 
    marker : 'X'
}

const playerTwo = {
    name : 'Jen',
    marker : 'O'
}

function printName(player){
    console.log(player.name)
}

printName(playerOne)
printName(playerTwo)