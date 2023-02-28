const scoreDisplay: any = document.querySelector("#score");
const boxes = document.querySelectorAll(".box");
//timer and push
let intervalId;
let time = 0;
let lastStopTime = 0;

const startButton = document.querySelector(".start") as HTMLButtonElement;
const stopButton = document.querySelector(".stop") as HTMLButtonElement;
const resumeButton = document.querySelector(".resume") as HTMLButtonElement;
const timeDisplay = document.querySelector(".time") as HTMLHeadingElement;
scoreDisplay.textContent = "score:";

startButton.addEventListener("click", startGame);
function startGame() {
  hasGameStarted=true
  if (!intervalId) {
    intervalId = setInterval(() => {
      time += 1;
      timeDisplay.textContent = time.toString();
    }, 1000);
  }
}

stopButton.addEventListener("click", () => {
  lastStopTime = time;
  clearInterval(intervalId);
  intervalId = undefined;
});

resumeButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = undefined;
  time = 0;
  timeDisplay.textContent = "00:00";
  window.location.reload()
});

function hendleLevel(ev) {
  try {
    ev.preventDefault();
    const level = ev.target.elements.levels.value;
    showRelevntLevels(level);
  } catch (error) {
    console.error(error);
  }
}

// let level=prompt("choose a level");
function showRelevntLevels(level: string) {
  try {
    if (level == "level1") {
      const boxes: NodeListOf<Element> = document.querySelectorAll(".level1");

      document.querySelectorAll(".level2,.level3").forEach(function (node) {
        let item = node as HTMLElement;
        item.style.display = "none";
      });
      playGame(boxes,3);
    }
    if (level == "level2") {
      const boxes = document.querySelectorAll(".level1,.level2");
      document.querySelectorAll(".level3").forEach(function (node) {
        let item = node as HTMLElement;
        item.style.display = "none";
      });

      playGame(boxes,6);
    }
    if (level == "level3") {
      const boxes = document.querySelectorAll(".level1,.level2,.level3");
      playGame(boxes,10);
    }
  } catch (error) {
    console.error(error);
  }
}

let hasGameStarted:boolean= false;





let first;
let second;
let matchCounter = 0;
let score = 0;

function playGame(boxes: NodeListOf<Element>,numOfPairs:number) {
  try {
    boxes.forEach(function (box) {
      // מסדר את הbox במסך בסדר אקראי לפי מספר
      const randomNum = Math.floor(Math.random() * 12);
      box.style.order = randomNum;
      box.addEventListener("click", function Game() {
        if(!hasGameStarted){
          startGame()
          hasGameStarted=true
        }
        if (!first && !second) {
          first = box;
          box.classList.add("show");
        } else if (first && !second) {
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
            if (matchCounter ===numOfPairs)
              setTimeout(
                () =>
                  alert(
                    `Game done! Your score is ${score} Refresh page to replay.`
                  ),
                2000
              );
          } else {
            first.classList.add("hide");
            second.classList.add("hide");
            setTimeout(() => {
              first.classList.remove("show");
              second.classList.remove("show");
              first.classList.remove("hide");
              second.classList.remove("hide");
              first = null;
              second = null;
              score -= 2;
              if (score < 0) score = 0;
              scoreDisplay.textContent = "score:" + score;
            }, 2000);
          }
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}
