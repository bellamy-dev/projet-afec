const perso = document.getElementById("perso");
const jumpsound = document.querySelector("#jumpsound");

let positionX = 100; // position de départ
let inJump = false; // saut désactivé par default

document.addEventListener('keydown', (event) => {  // Ajoute 'event' ici !

    switch(event.code) {
        case "ArrowRight":
            positionX += 15;
            perso.style.left = positionX + 'px';
            break;

        case "ArrowLeft":
            positionX -= 15;
            perso.style.left = positionX + 'px';
            break;

        case "Space":
        case "ArrowUp":
            if (!inJump) {
                inJump = true;
                jumpsound.currentTime = 0;
                jumpsound.play();

                // Animation de saut
                perso.style.bottom = '200px'; // Monte
                setTimeout(() => {
                    perso.style.bottom = '60px'; // Redescend
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
