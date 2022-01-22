const output = document.querySelector('#output');
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');

const getRandomNumber = () => Math.round(Math.random() * 5) + 1;

const changeOutput = text => output.textContent = text;

window.addEventListener('beforeunload', () => sessionStorage.setItem('count', '1'));

window.addEventListener('load', () => {
    if (sessionStorage.getItem('count')) {
        const player1Choice = getRandomNumber();
        const player2Choice = getRandomNumber();

        if (player1Choice > player2Choice) changeOutput('Player 1 Wins!');
        else if (player2Choice > player1Choice) changeOutput('Player 2 Wins!');
        else changeOutput('Draw!');

        player1.src = `img/dice${player1Choice}.png`;
        player2.src = `img/dice${player2Choice}.png`;
    }
})