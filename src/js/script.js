const perso = document.getElementById("perso");
const jumpsound = document.querySelector("#jumpsound");

let positionX = 100;
let inJump = false;

document.addEventListener('keydown', (event) => {

    switch(event.code) {
        case "ArrowRight":
            positionX += 15;
            perso.style.left = positionX + 'px';
            perso.style.backgroundImage = 'url(./src/img/marioright.png)';
            break;

        case "ArrowLeft":
            positionX -= 15;
            perso.style.left = positionX + 'px';
            perso.style.backgroundImage = 'url(./src/img/marioleft.png)';
            break;

        case "Space":
        case "ArrowUp":
            if (!inJump) {
                inJump = true;
                jumpsound.currentTime = 0;
                jumpsound.play();

                perso.style.bottom = '200px';
                setTimeout(() => {
                    perso.style.bottom = '60px';
                    setTimeout(() => {
                        inJump = false;
                    }, 100);
                }, 300);
            }
            break;

        default:
            break;
    }
});
