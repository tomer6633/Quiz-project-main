var scoreDisplay = document.querySelector('#score');
var boxes = document.querySelectorAll('.box');
//timer and push
var intervalId;
var time = 0;
var lastStopTime = 0;
var imgDiv = document.querySelector('.container__login--pfp');
var img = document.querySelector('#photo');
var file = document.querySelector('#file');
var uplodeBtn = document.querySelector('#uplodebtn');
var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var resumeButton = document.querySelector(".resume");
var timeDisplay = document.querySelector(".time");
function addStar() {
    var s = document.createElement('div');
    s.className = 'star';
    s.style.setProperty('--size', Math.random() * 10 + 3 + 'vmin');
    s.style.left = Math.floor(Math.random() * 100) + '%';
    s.style.top = Math.floor(Math.random() * 100) + '%';
    s.onanimationend = function () { this.remove(); };
    document.body.appendChild(s);
}
setInterval(addStar, 200);
file === null || file === void 0 ? void 0 : file.addEventListener('change', function () {
    var choosedFile = this.files[0];
    if (choosedFile) {
        var reader_1 = new FileReader();
        reader_1.addEventListener('load', function () {
            img === null || img === void 0 ? void 0 : img.setAttribute('src', reader_1.result);
        });
        reader_1.readAsDataURL(choosedFile);
    }
});
startButton.addEventListener("click", function () {
    if (!intervalId) {
        intervalId = setInterval(function () {
            time += 1;
            timeDisplay.textContent = time.toString();
        }, 1000);
    }
});
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
});
var first;
var second;
var matchCounter = 0;
var score = 0;
boxes.forEach(function (box) {
    // מסדר את הbox במסך בסדר אקראי לפי מספר 
    var randomNum = Math.floor(Math.random() * 12);
    box.style.order = randomNum;
    scoreDisplay.textContent = "score:" + score;
    box.addEventListener('click', function Game() {
        if (!first && !second) {
            first = box;
            box.classList.add('show');
        }
        else if (first && !second) {
            second = box;
            box.classList.add('show');
            if (first.innerHTML === second.innerHTML) {
                // first.style.pointerEvents = 'none';
                // second.style.pointerEvents = 'none';
                first = null;
                second = null;
                matchCounter++;
                score += 10;
                scoreDisplay.textContent = "score:" + score;
                if (matchCounter >= 6)
                    setTimeout(function () { return alert("Game done! Your score is " + score + " Refresh page to replay."); }, 2000);
            }
            else {
                first.classList.add('hide');
                second.classList.add('hide');
                setTimeout(function () {
                    first.classList.remove('show');
                    second.classList.remove('show');
                    first.classList.remove('hide');
                    second.classList.remove('hide');
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
function ageCalculator() {
    var userinput = document.getElementById("dob").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "**Choose a date please!";
        return false;
    }
    else {
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        return console.log("Age is: " + age + " years. ");
    }
}
