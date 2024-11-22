const images = ["img/photo2.png", "img/photo3.png", "img/photo4.png", "img/photo5.png", "img/photo6.png", "img/photo7.png", "img/photo8.png", "img/photo9.png", "img/photo10.png"];

let index = 0;

const slide = document.getElementById('slide');
function next() {
    if (index < images.length - 1) {
        index++
    }
    else {
        index = 0
    }
    slide.src = images[index]
}
function back() {
    if (index > 0) {
        index--
    }
    else {
        index = images.length - 1;
    }
    slide.src = images[index]
}
setInterval(next, 2000);