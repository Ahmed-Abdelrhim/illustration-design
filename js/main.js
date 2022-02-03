let bars = document.querySelector('.bars');
let collapse = document.querySelector('.navbar-collapse');
console.log(bars);
bars.addEventListener('click',function(){
    collapse.classList.toggle('show');
})