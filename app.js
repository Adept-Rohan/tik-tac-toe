const xClass = 'x'
const cricleClass ='circle'

let circleTurn 

const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [1,4,8],
    [2,4,6]
]

const cellElements = document.querySelectorAll('[data-cell]')
const winningMessageText = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')

cellElements.forEach(cell=>{
    cell.addEventListener('click', handleClick, {once:true})
})

function handleClick (e){
    const cell = e.target
    const currentClass = circleTurn ? cricleClass : xClass
    placeMark(cell, currentClass)
    if(checkwin(currentClass)){
         endgame (false)
    }
    swapTurns()

}

function endgame(draw){
    if(draw){

    }
    else{
        winningMessageText.innerText = `${circleTurn? "O's" :"X's" } Wins`
    }
    winningMessageElement.classList.add('show')
}

function placeMark (cell,currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function checkwin(currentClass){
    return winningCombination.some(combination =>{
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

