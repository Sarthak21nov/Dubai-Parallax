let burjkhalifa = document.querySelector('#burjkhalifa');
let stars = document.querySelector('#stars');
let dubaitext = document.querySelector('#dubaitext');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    dubaitext.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
})
