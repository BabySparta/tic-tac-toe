
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
        if (array.at(0) === array.at(3) && array.at(0) === array.at(6) && array.at(0) !== '') {alert(`${turn} won the game!`); return}
        if (array.at(1) === array.at(4) && array.at(1) === array.at(7) && array.at(1) !== '') {alert(`${turn} won the game!`); return}
        if (array.at(2) === array.at(5) && array.at(2) === array.at(8) && array.at(2) !== '') {alert(`${turn} won the game!`); return}
        if (array.at(0) === array.at(1) && array.at(0) === array.at(2) && array.at(0) !== '') {alert(`${turn} won the game!`); return}
        if (array.at(3) === array.at(4) && array.at(3) === array.at(5) && array.at(3) !== '') {alert(`${turn} won the game!`); return}
        if (array.at(6) === array.at(7) && array.at(6) === array.at(8) && array.at(6) !== '') {alert(`${turn} won the game!`); return}
        if (array.at(0) === array.at(4) && array.at(0) === array.at(8) && array.at(0) !== '') {alert(`${turn} won the game!`); return}
        if (array.at(2) === array.at(4) && array.at(2) === array.at(6) && array.at(2) !== '') {alert(`${turn} won the game!`); return}
        draw();
    }

    const draw = () => {
        const newArray = []
        array.forEach(item => {
            const reduced = item.split(' ').join('')
            newArray.push(reduced);
        });
        if (newArray.includes('')) {return}
        else {alert("It's a draw!")}
    }

    const reset = document.querySelector('.reset');
        reset.addEventListener("click", clear = () => {
        console.log(array);
        const cells = document.querySelectorAll('.cell');
        array = ['', ' ', '  ', '   ', '    ', '     ', '      ', '       ', '        '];
        cells.forEach(item => {item.textContent = ''})
    })

    return {display}
})();

displayGame.display();
