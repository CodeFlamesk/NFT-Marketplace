
function handleHover() {
    // Вибираємо всі елементи з класами '.img-card-categories__img-big' та '.img-card-categories__img-into'
    var imgBigArray = document.querySelectorAll('.img-card-categories__img-big');
    var imgIntoArray = document.querySelectorAll('.img-card-categories__img-into');
  
    // Перевірка, чи масиви мають однаковий розмір
    if (imgBigArray.length !== imgIntoArray.length) {
      console.error('Масиви мають різний розмір');
      return;
    }
  
    // Перебираємо кожен елемент масиву
    imgBigArray.forEach(function (imgBig, index) {
      // Додаємо подію при наведенні миші на елемент
      imgBig.addEventListener('mouseover', function () {
        imgIntoArray[index].style.display = 'none';
      });
  
      // Додаємо подію при відведенні миші від елемента
      imgBig.addEventListener('mouseout', function () {
        imgIntoArray[index].style.display = 'block';
      });
    });
  }
  
  // Виклик функції при завантаженні сторінки
  window.onload = function () {
    handleHover();
  };
  
  
  
  function swapImages(mainImage, smallImage) {
    const mainImagePath = mainImage.src;
    mainImage.src = smallImage.src;
    smallImage.src = mainImagePath;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.cards-all__box-foto-collection');
  
    imageContainers.forEach(container => {
      const smallImages = container.querySelectorAll('.passive-img__small-img img');
  
      smallImages.forEach(smallImage => {
        smallImage.addEventListener('click', () => {
          swapImages(container.querySelector('.box-foto-collection__img-big img'), smallImage);
        });
      });
    });
  });
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const inputWrapper = document.querySelectorAll(".input-create-account__input-wrapper");
  
    inputWrapper.forEach(element => {
      element.addEventListener("click", function (event) {
        event.stopPropagation();
  
        // Зніміть "activeinput" з усіх елементів
        inputWrapper.forEach(e => {
          e.classList.remove("activeinput");
        });
  
        // Встановіть "activeinput" для поточного елемента
        this.classList.toggle("activeinput");
      });
    });
  
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".input-create-account__input-wrapper")) {
        inputWrapper.forEach(element => {
          element.classList.remove("activeinput");
        });
      }
    });
  });
  
   