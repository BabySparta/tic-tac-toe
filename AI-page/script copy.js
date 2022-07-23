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
        cell.textContent = 'X';
        updateArray(cell, item);
        checkWin('player');
        if (checkWin() === true) {return;}
        AIplay();
    }

    const updateArray = (cell, item) => {
        let position = array.indexOf(item);
        array[position] = cell.textContent;
    }
    const checkWin = (player) => {
        if (array.at(0) === array.at(3) && array.at(0) === array.at(6) && array.at(0) !== '') {gameEnd(player); return true;}
        if (array.at(1) === array.at(4) && array.at(1) === array.at(7) && array.at(1) !== '') {gameEnd(player); return true;}
        if (array.at(2) === array.at(5) && array.at(2) === array.at(8) && array.at(2) !== '') {gameEnd(player); return true;}
        if (array.at(0) === array.at(1) && array.at(0) === array.at(2) && array.at(0) !== '') {gameEnd(player); return true;}
        if (array.at(3) === array.at(4) && array.at(3) === array.at(5) && array.at(3) !== '') {gameEnd(player); return true;}
        if (array.at(6) === array.at(7) && array.at(6) === array.at(8) && array.at(6) !== '') {gameEnd(player); return true;}
        if (array.at(0) === array.at(4) && array.at(0) === array.at(8) && array.at(0) !== '') {gameEnd(player); return true;}
        if (array.at(2) === array.at(4) && array.at(2) === array.at(6) && array.at(2) !== '') {gameEnd(player); return true;}
        draw();
        if (draw() === true) {return true}
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
        return true;
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

    const gameEnd = (player) => {
        const endText = document.querySelector('.endText');
        const modal = document.querySelector('.endModal');
        modal.style.display = 'flex';
        if (player === 'player') {
            endText.textContent = `${playerOne} won the game!`;
            return true;
        }
        if (player === 'AI') {
            endText.textContent = `The AI won the game!`;
            return true;
        }
    }

    const AIplay = () => {
        checkWin('player');
        const board = document.querySelectorAll('.cell')    ;
        let number = Math.floor(Math.random() * 9);
        if (array[number].split(' ').join('') === '') {
            array[number] = 'O';
            board.item(number).textContent = 'O';
            checkWin('AI');
            return;
        } AIplay();
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
    if (event.target == modal) {
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

const changeMode = document.querySelector('.changeMode');
changeMode.addEventListener('click', )
