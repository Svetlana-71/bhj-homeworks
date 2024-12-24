const deadId = document.getElementById('dead');
const lostId = document.getElementById('lost');

let countDead = 0;
let countLost = 0;
getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.addEventListener('click', function() {
        if (hole.className.includes('hole_has-mole')) {
            countDead++;
            deadId.textContent = countDead;
            if (countDead === 10) {
                alert('Вы победили!');
                countDead = 0;
                countLost = 0;
                deadId.textContent = countDead;
                lostId.textContent = countLost;
                location.reload();
            }
        } else {
            countLost++;
            lostId.textContent = countLost;
            if (countLost === 5) {
                alert('Вы проиграли!');
                countDead = 0;
                countLost = 0;
                deadId.textContent = countDead;
                lostId.textContent = countLost;
                location.reload();
            }
        }      
    });
}