const scoreDisplay:any = document.querySelector('#score');
const boxes = document.querySelectorAll('.box');
//timer and push
let intervalId;
let time = 0;
let lastStopTime = 0;
const imgDiv = document.querySelector('.container__login--pfp');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uplodeBtn = document.querySelector('#uplodebtn');


const startButton = document.querySelector(".start") as HTMLButtonElement;
const stopButton = document.querySelector(".stop") as HTMLButtonElement;
const resumeButton = document.querySelector(".resume") as HTMLButtonElement;
const timeDisplay = document.querySelector(".time") as HTMLHeadingElement;
function addStar() {
  let s = document.createElement('div')
  s.className = 'star'
  s.style.setProperty('--size', Math.random()*10 + 3 + 'vmin')
  s.style.left = Math.floor(Math.random()*100) + '%'
  s.style.top = Math.floor(Math.random()*100) + '%'
  s.onanimationend = function() { this.remove() }
  document.body.appendChild(s)
}
setInterval(addStar,200);
file?.addEventListener ('change', function(){
  const choosedFile = this.files[0];
  if(choosedFile){
    const reader = new FileReader ();
    reader.addEventListener('load',function(){
      img?.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(choosedFile)
  }
})


startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      time += 1;
      timeDisplay.textContent = time.toString();
    }, 1000);
  }
});

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
  });


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


function ageCalculator() {  
  let userinput = document.getElementById("dob").value;  
  let dob = new Date(userinput);  
  if(userinput==null || userinput=='') {  
    document.getElementById("message").innerHTML = "**Choose a date please!";    
    return false;   
  } else {  

   let month_diff = Date.now() - dob.getTime();  

  let age_dt = new Date(month_diff);       
  let year = age_dt.getUTCFullYear();  
  let age = Math.abs(year - 1970);  
  return console.log (  "Age is: " + age + " years. ");  
  }  
}  



