gameSequence = [];
userSequence = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "blue", "green"]

let h2 = document.querySelector('h2');


document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('Game Started');
        started = true;

        levelup();
    }
})

function btnFlash(btn) {
    btn.style.backgroundColor = 'white';
    setTimeout(() => {
        btn.style.backgroundColor = '';
    }, 200);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`
    userSequence = [];

    let randomIdx = Math.floor(Math.random() * 4)
    let randomBtnColor = btns[randomIdx];
    gameSequence.push(`${randomBtnColor}`);
    console.log(gameSequence);

    let randomBtn = document.getElementById(`${randomBtnColor}`)
    btnFlash(randomBtn);
}

allBtns = document.querySelectorAll('.btns');
for (let btn of allBtns) {
    btn.addEventListener('click', function () {
        // console.log(btn);
        btn.style.backgroundColor = "black";
        btn.style.border = "3px solid aqua"
        setTimeout(() => {
            btn.style.backgroundColor = ''
            btn.style.border = ''
        }, 100);

        let userColor = btn.getAttribute('id');
        // console.log(userColor);
        userSequence.push(userColor);
        console.log(userSequence);

        check(userSequence.length - 1)
    })
}

function check(idx) {
    console.log(`Current Level : ${level}`)

    if (userSequence[idx] == gameSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(() => {
                levelup();
            }, 1000);
        }
    } else {
        console.log('Game over');
        reset();
    }
}

let score = document.querySelector('#highScore');
let hScore = 0;
function reset() {
    h2.innerHTML = `Game Over at Level ${level} <br> <br> Please Enter Any key to Restart`;

    if (level > hScore) {
        hScore = level;
        score.innerText = `Highest Score : ${hScore}`;
    }

    level = 0;
    gameSequence = [];
    userSequence = [];
    started = false;

}