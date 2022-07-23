let playerOne = 'Player 1';

const displayGame = (() => {
    let array = ['', ' ', '  ', '   ', '    ', '     ', '      ', '       ', '        '];
    let turn = 'Player 1';
    const display = () => {
        const gameboard = document.querySelector('.gameboard');
        array.forEach(item => {
            const cell = document.createElement('div');
            cell.textContent = item;
            cell.classList.add('cell');
            cell.addEventListener('click', makeTurn = () => {play(cell, item)});
            gameboard.appendChild(cell);
        })
    }
    const play = (cell, item) => {
        if (cell.textContent.split(' ').join('') !== '') {return;}  
        if (turn === 'Player 1') {
        cell.textContent = 'X'
        } else { cell.textContent = 'O'}
        updateArray(cell, item);
        checkWin();
        changeTurn();
    }
    const changeTurn = () => {
        if (turn === 'Player 1') { turn = 'Player 2'; return;} 
        if (turn === 'Player 2') { turn = 'Player 1'; return;}  
    }
    const updateArray = (cell, item) => {
        let position = array.indexOf(item);
        array[position] = cell.textContent;
    }
    const checkWin = () => {
        if (array.at(0) === array.at(3) && array.at(0) === array.at(6) && array.at(0) !== '') {gameEnd()}
        if (array.at(1) === array.at(4) && array.at(1) === array.at(7) && array.at(1) !== '') {gameEnd()}
        if (array.at(2) === array.at(5) && array.at(2) === array.at(8) && array.at(2) !== '') {gameEnd()}
        if (array.at(0) === array.at(1) && array.at(0) === array.at(2) && array.at(0) !== '') {gameEnd()}
        if (array.at(3) === array.at(4) && array.at(3) === array.at(5) && array.at(3) !== '') {gameEnd()}
        if (array.at(6) === array.at(7) && array.at(6) === array.at(8) && array.at(6) !== '') {gameEnd()}
        if (array.at(0) === array.at(4) && array.at(0) === array.at(8) && array.at(0) !== '') {gameEnd()}
        if (array.at(2) === array.at(4) && array.at(2) === array.at(6) && array.at(2) !== '') {gameEnd()}
        draw();
    }

    const draw = () => {
        const endText = document.querySelector('.endText');
        const modal = document.querySelector('.endModal');
        const newArray = []
        array.forEach(item => {
            const reduced = item.split(' ').join('')
            newArray.push(reduced);
        });
        if (newArray.includes('')) {return}
        modal.style.display = 'flex';
        endText.textContent = "It's a draw!";
    }

    const reset = document.querySelector('.reset');
        reset.addEventListener("click", clear = () => {
        const cells = document.querySelectorAll('.cell');
        array = ['', ' ', '  ', '   ', '    ', '     ', '      ', '       ', '        '];
        cells.forEach(item => {item.textContent = ''})
        turn = 'Player 1';
        const modal = document.querySelector('.endModal');
        modal.style.display = 'none';
    })

    const gameEnd = () => {
        const endText = document.querySelector('.endText');
        const modal = document.querySelector('.endModal');
        modal.style.display = 'flex';
        if (turn === 'Player 1') {
        endText.textContent = `${playerOne} won the game!`;
        return;
        }
        endText.textContent = `${playerTwo} won the game!`;
    }

    return {display}
})();

displayGame.display();

/* Modal Functions */

const button1 = document.querySelector('.one');
const modal = document.querySelector(".modal1");
const span = document.querySelector(".close");
const form = document.querySelector('.modalForm');


button1.onclick = function() {
    form.reset();
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
}
}
form.onsubmit = function() {
    event.preventDefault();
    const nameOne = document.querySelector('.modalInput').value;
    changeName1(nameOne);
    modal.style.display = "none";
};
const changeName1 = (name) => {
    playerOne = name;
}   
