let score1 = 0;
let score2 = 0;
let turn = 1; 
let lastPlayer = null;

function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function checkWinner() {
    if (score1 >= 100) {
        document.getElementById('winnerMessage').textContent = 'User 1 Wins!';
        document.getElementById('winnerMessage').style.display = 'block';
    } else if (score2 >= 100) {
        document.getElementById('winnerMessage').textContent = 'User 2 Wins!';
        document.getElementById('winnerMessage').style.display = 'block';
    }
}

function switchTurn() {
    if (turn === 1) {
        turn = 2;
        document.getElementById('player1').classList.remove('active');
        document.getElementById('player1').classList.add('inactive');
        document.getElementById('player2').classList.add('active');
        document.getElementById('player2').classList.remove('inactive');
    } else {
        turn = 1;
        document.getElementById('player2').classList.remove('active');
        document.getElementById('player2').classList.add('inactive');
        document.getElementById('player1').classList.add('active');
        document.getElementById('player1').classList.remove('inactive');
    }
}

document.getElementById('btn1').addEventListener('click', function() {
    if (turn === 1 && lastPlayer !== 1) {
        const randomNumber = getRandomNumber();
        score1 += randomNumber;
        document.getElementById('number1').textContent = randomNumber;
        document.getElementById('score1').textContent = `Score: ${score1}`;
        lastPlayer = 1;
        checkWinner();
        switchTurn();
    }
});

document.getElementById('btn2').addEventListener('click', function() {
    if (turn === 2 && lastPlayer !== 2) {
        const randomNumber = getRandomNumber();
        score2 += randomNumber;
        document.getElementById('number2').textContent = randomNumber;
        document.getElementById('score2').textContent = `Score: ${score2}`;
        lastPlayer = 2;
        checkWinner();
        switchTurn();
    }
});

document.getElementById('player1').classList.add('active');
document.getElementById('player2').classList.add('inactive');