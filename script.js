const displayGame = (() => {
    const array = ['', ' ', '  ', '   ', '    ', '     ', '      ', '       ', '        '];
    let turn = 'Player 1';
    const display = () => {
        const gameboard = document.querySelector('.gameboard');
        array.forEach(item => {
            const cell = document.createElement('div');
            cell.textContent = item;
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
        if (array.at(0) === array.at(3) && array.at(0) === array.at(6)) {alert(`${turn} won the game!`)}
        if (array.at(1) === array.at(4) && array.at(1) === array.at(7)) {alert(`${turn} won the game!`)}
        if (array.at(2) === array.at(5) && array.at(2) === array.at(8)) {alert(`${turn} won the game!`)}
        if (array.at(0) === array.at(1) && array.at(0) === array.at(2)) {alert(`${turn} won the game!`)}
        if (array.at(3) === array.at(4) && array.at(3) === array.at(5)) {alert(`${turn} won the game!`)}
        if (array.at(6) === array.at(7) && array.at(6) === array.at(8)) {alert(`${turn} won the game!`)}
        if (array.at(0) === array.at(4) && array.at(0) === array.at(8)) {alert(`${turn} won the game!`)}
        if (array.at(2) === array.at(4) && array.at(2) === array.at(6)) {alert(`${turn} won the game!`)}

    }
    return {display}
})();

displayGame.display();