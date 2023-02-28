var scoreDisplay = document.querySelector("#score");
var boxes = document.querySelectorAll(".box");
//timer and push
var intervalId;
var time = 0;
var lastStopTime = 0;
var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var resumeButton = document.querySelector(".resume");
var timeDisplay = document.querySelector(".time");
scoreDisplay.textContent = "score:";
startButton.addEventListener("click", startGame);
function startGame() {
    hasGameStarted = true;
    if (!intervalId) {
        intervalId = setInterval(function () {
            time += 1;
            timeDisplay.textContent = time.toString();
        }, 1000);
    }
}
stopButton.addEventListener("click", function () {
    lastStopTime = time;
    clearInterval(intervalId);
    intervalId = undefined;
});
resumeButton.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = undefined;
    time = 0;
    timeDisplay.textContent = "00:00";
    window.location.reload();
});
function hendleLevel(ev) {
    try {
        ev.preventDefault();
        var level = ev.target.elements.levels.value;
        showRelevntLevels(level);
    }
    catch (error) {
        console.error(error);
    }
}
// let level=prompt("choose a level");
function showRelevntLevels(level) {
    try {
        if (level == "level1") {
            var boxes_1 = document.querySelectorAll(".level1");
            document.querySelectorAll(".level2,.level3").forEach(function (node) {
                var item = node;
                item.style.display = "none";
            });
            playGame(boxes_1, 3);
        }
        if (level == "level2") {
            var boxes_2 = document.querySelectorAll(".level1,.level2");
            document.querySelectorAll(".level3").forEach(function (node) {
                var item = node;
                item.style.display = "none";
            });
            playGame(boxes_2, 6);
        }
        if (level == "level3") {
            var boxes_3 = document.querySelectorAll(".level1,.level2,.level3");
            playGame(boxes_3, 10);
        }
    }
    catch (error) {
        console.error(error);
    }
}
var hasGameStarted = false;
var first;
var second;
var matchCounter = 0;
var score = 0;
function playGame(boxes, numOfPairs) {
    try {
        boxes.forEach(function (box) {
            // מסדר את הbox במסך בסדר אקראי לפי מספר
            var randomNum = Math.floor(Math.random() * 12);
            box.style.order = randomNum;
            box.addEventListener("click", function Game() {
                if (!hasGameStarted) {
                    startGame();
                    hasGameStarted = true;
                }
                if (!first && !second) {
                    first = box;
                    box.classList.add("show");
                }
                else if (first && !second) {
                    second = box;
                    box.classList.add("show");
                    if (first.innerHTML === second.innerHTML) {
                        // first.style.pointerEvents = 'none';
                        // second.style.pointerEvents = 'none';
                        first = null;
                        second = null;
                        matchCounter++;
                        score += 10;
                        scoreDisplay.textContent = "score:" + score;
                        if (matchCounter === numOfPairs)
                            setTimeout(function () {
                                return alert("Game done! Your score is " + score + " Refresh page to replay.");
                            }, 2000);
                    }
                    else {
                        first.classList.add("hide");
                        second.classList.add("hide");
                        setTimeout(function () {
                            first.classList.remove("show");
                            second.classList.remove("show");
                            first.classList.remove("hide");
                            second.classList.remove("hide");
                            first = null;
                            second = null;
                            score -= 2;
                            if (score < 0)
                                score = 0;
                            scoreDisplay.textContent = "score:" + score;
                        }, 2000);
                    }
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
