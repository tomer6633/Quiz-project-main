const boxes = document.querySelectorAll('.box');
const scoreDisplay:any = document.querySelector('#score');


let first;
let second;
let matchCounter = 0;
let score = 0;

boxes.forEach(function(box) {
    // מסדר את הbox במסך בסדר אקראי לפי מספר 
    let randomNum = Math.floor(Math.random() * 12);        
    box.style.order = randomNum;
    scoreDisplay.textContent = "score:" + score;
    box.addEventListener('click', function Game() {
        if (!first && !second) {
            first = box;
            box.classList.add('show');
        } else if (first && !second) {
            second = box;
            box.classList.add('show');
            if (first.innerHTML === second.innerHTML) {
                // first.style.pointerEvents = 'none';
                // second.style.pointerEvents = 'none';
                first = null;
                second = null;
                matchCounter++;
                score += 10;
                scoreDisplay.textContent = "score:"+score;
                if (matchCounter >= 6) setTimeout(() => alert(`Game done! Your score is ${score} Refresh page to replay.`), 2000 );
            } else {
                first.classList.add('hide');
                second.classList.add('hide');
                setTimeout(() => {
                    first.classList.remove('show');
                    second.classList.remove('show');
                    first.classList.remove('hide');
                    second.classList.remove('hide');
                    first = null;
                    second = null;
                    score -= 2;
                    if (score < 0) score = 0;
                    scoreDisplay.textContent = "score:" + score;
                }, 2000);
            }
        }

    })
});

