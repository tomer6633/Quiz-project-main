var sendBtn = document.getElementById('send');
var form = document.getElementById('form');
var imgDiv = document.querySelector('#container');
var img = document.querySelector('#photo');
var file = document.querySelector('#file');
var uplodeBtn = document.querySelector('#uplodebtn');
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
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault;
});
sendBtn === null || sendBtn === void 0 ? void 0 : sendBtn.addEventListener('click', function (e) {
    var name = document.getElementById('name');
    var dob = document.getElementById('dob');
    // let pfp = document.getElementById('photo');
    name = name === null || name === void 0 ? void 0 : name.value;
    localStorage.setItem('name', name);
    dob = ageCalculator().value;
    localStorage.setItem('dob', dob);
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
});
file === null || file === void 0 ? void 0 : file.addEventListener('change', function () {
    var choosedFile = this.files[0];
    if (choosedFile) {
        var reader_1 = new FileReader();
        reader_1.addEventListener('load', function () {
            img === null || img === void 0 ? void 0 : img.setAttribute('src', reader_1.result);
            localStorage.setItem('file', reader_1.result);
        });
        reader_1.readAsDataURL(choosedFile);
    }
});
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
