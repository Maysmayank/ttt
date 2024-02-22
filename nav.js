const body=document.querySelector("body");
const toggle=document.querySelector(".toggle");
/* const modeswitch=document.querySelector(".toggle-switch");
const modetext=document.querySelector(".modetextswitch");
modeswitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
})*/

const enuIcon = document.getElementById('menubars');
const loseIcon = document.getElementById('close-icon');
const idebar = document.querySelector('.side-bar');

menuIcon.addEventListener('click', () => {
    sidebar.style.left = '0';
});

closeIcon.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});

