let sendBtn = document.getElementById('send');
let form = document.getElementById('form');
const imgDiv = document.querySelector('#container');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uplodeBtn = document.querySelector('#uplodebtn');

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
form?.addEventListener('submit',(e)=>{
  e.preventDefault
});

sendBtn?.addEventListener('click',(e)=>{
  let name =document.getElementById('name');
  let dob = document.getElementById('dob');
  // let pfp = document.getElementById('photo');

  name=name?.value;
  localStorage.setItem('name',name);
  dob = ageCalculator().value;
  localStorage.setItem('dob',dob);
  // file?.addEventListener('change',(ev)=>{
  //   const image = ev.target.file[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(image);
  //   reader.addEventListener('load',()=>{
  //     localStorage.setItem('file',reader.result)
  //   })
  // })
  // pfp=pfp.value;
  // localStorage.setItem('photo',pfp);
  
})


file?.addEventListener ('change', function(){
  const choosedFile = this.files[0];
  if(choosedFile){
    const reader = new FileReader ();
    reader.addEventListener('load',function(){
      img?.setAttribute('src', reader.result);
      localStorage.setItem('file',reader.result)
    });
    reader.readAsDataURL(choosedFile)
  }
})

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
  
 