function startPiece() {
    const allPlayers = document.querySelectorAll('.all-players');
    const player1 = document.querySelector('#player1');
    const player2 = document.querySelector('#player2');
    const player3 = document.querySelector('#player3');
    const player4 = document.querySelector('#player4');
    const player5 = document.querySelector('#player5');
    const player6 = document.querySelector('#player6');
    const player7 = document.querySelector('#player7');
    const player8 = document.querySelector('#player8');
    const player9 = document.querySelector('#player9');
    const player10 = document.querySelector('#player10');
    const player11 = document.querySelector('#player11');
    const player12 = document.querySelector('#player12');

    const instructionsDiv = document.querySelector('.instructions');
    instructionsDiv.remove();

    for (i = 0; i < allPlayers.length; i++) {
        allPlayers[i].style.visibility = 'visible';
    }


}