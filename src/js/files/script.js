// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');
var timerInterval; // Додайте визначення тут

// Перевірка існування елементів
if (!hoursElement || !minutesElement || !secondsElement) {
    console.error('Не вдалося знайти один з елементів таймера.');
} else {
    var totalSeconds = 60 * 60 * 60;

    function updateTimer() {
        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;

        hoursElement.textContent = hours;
        minutesElement.textContent = (minutes < 10 ? '0' : '') + minutes;
        secondsElement.textContent = (seconds < 10 ? '0' : '') + seconds;

        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(timerInterval);
            alert('Таймер закінчився!');
            restartTimer();
        }
    }

    function restartTimer() {
        totalSeconds = 60 * 60 * 60;
        timerInterval = setInterval(updateTimer, 1000);
    }

    // Ініціалізація таймера
    restartTimer();
}


//////////////////////////////////////////
function handleHover() {
    var imgBigArray = document.querySelectorAll(".img-card-categories__img-big");
    var imgIntoArray = document.querySelectorAll(".img-card-categories__img-into");
    if (imgBigArray.length !== imgIntoArray.length) {
        console.error("Масиви мають різний розмір");
        return;
    }
    imgBigArray.forEach((function (imgBig, index) {
        imgBig.addEventListener("mouseover", (function () {
            imgIntoArray[index].style.display = "none";
        }));
        imgBig.addEventListener("mouseout", (function () {
            imgIntoArray[index].style.display = "block";
        }));
    }));
}
window.onload = function () {
    handleHover();
};
function swapImages(mainImage, smallImage) {
    const mainImagePath = mainImage.src;
    mainImage.src = smallImage.src;
    smallImage.src = mainImagePath;
}
document.addEventListener("DOMContentLoaded", (() => {
    const imageContainers = document.querySelectorAll(".cards-all__box-foto-collection");
    imageContainers.forEach((container => {
        const smallImages = container.querySelectorAll(".passive-img__small-img img");
        smallImages.forEach((smallImage => {
            smallImage.addEventListener("click", (() => {
                swapImages(container.querySelector(".box-foto-collection__img-big img"), smallImage);
            }));
        }));
    }));
}));






