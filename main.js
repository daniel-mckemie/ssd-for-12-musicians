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

    const allPlayersText = document.querySelectorAll('.all-players-text');

    const instructionsDiv = document.querySelector('.instructions');
    instructionsDiv.remove();



    const actions = ['SAME', 'SIMILAR', 'DIFFERENT'];


    function fadeIn(element) {
        var op = 0.1; // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }

    function fadeOut(element) {
        var op = 1; // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 10);
    }

    for (let i = 0; i < allPlayers.length; i++) {
        allPlayers[i].style.visibility = 'visible';
        allPlayersText[i].innerHTML = 'BEGIN';
        setTimeout(() => {
            fadeOut(allPlayersText[i]);
        }, 9000);
    }


    setInterval(() => {
        for (let i = 0; i < allPlayersText.length; i++) {
            let randomAction = Math.floor(Math.random() * 3);
            allPlayersText[i].innerHTML = actions[randomAction];
            fadeIn(allPlayersText[i]);
            setTimeout(() => {
                fadeOut(allPlayersText[i]);
            }, 9000);
        }

    }, 11000);




}