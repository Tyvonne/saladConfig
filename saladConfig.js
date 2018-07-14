var btn1 = document.querySelector('input[id=btn1]');
var btn2 = document.querySelector('input[id=btn2]');
var btn3 = document.querySelector('input[id=btn3]');
var txt = document.querySelector('p');

btn1.addEventListener('click', updateBtn1);
btn2.addEventListener('click', updateBtn2);
btn3.addEventListener('click', updateBtn3);

function updateBtn1() {
    txt.textContent = btn1.value;
}
function updateBtn2() {
    txt.textContent = btn2.value;
}
function updateBtn3() {
    txt.textContent = btn3.value;
}