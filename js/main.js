let days = document.getElementById('days');
let btn1 = document.getElementById('btn1');
let num = document.getElementById('num');
let num1 = document.getElementById('num1');
let pra = document.getElementById('pra');
let btn2 = document.getElementById('btn2');
let booke = document.getElementById('booke');
function  resulte() {
    let resulte = +604 / +days.value
    num.innerHTML = Math.trunc(resulte);
    num1.innerHTML = Math.trunc(+resulte / +5);
    
    pra.style.display = "block";
}


