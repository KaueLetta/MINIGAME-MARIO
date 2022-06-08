const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

    mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

const pipiPosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (pipiPosition <= 120 && pipiPosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipiPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/game-over.png"
    mario.style.width = "85px"
    mario.style.marginLeft = "50px"

    clearInterval(loop);
}

}, 10);



document.addEventListener("keydown", jump);