// 1 - выбор элементов на страничке (тегов)

// 1.1 - выбор по id

let h2 = document.getElementById("title-menu");
console.log(h2);

// 1.2 - выбор первого элемента по селектору

const title = document.querySelector("h1");
console.log(title);

// 1.3 - выбор нескольких элементов по селектору

const paragrapth = document.querySelectorAll(".text");
console.log(paragrapth);

// 2 - работа с содержимым (контента) тегов

// 2.1 - чтение

console.log(title.textContent);
console.log(title.innerHTML);
console.log(title.innerText);
console.log(title.outerHTML);
console.log(title.outerText);

// 2.2 - запись

title.textContent = "Новый заголовок <img src='img/amazon.svg'>";
title.innerHTML = "Новый заголовок <img src='img/amazon.svg'>";

// 2.3 - удаление

// title.innerHTML = "";

// 3 - работа с классами (атрибут class)

// 3.1 - добавить класс

h2.classList.add("blue");
h2.classList.add("big");

// 3.2 - удаление класса

h2.classList.remove("big");

// 3.3 - проверить есть класс или нет 

console.log(h2.classList.contains("blue"));
console.log(h2.classList.contains("red"));

// 4 - работа со стилями (атрибут style)

let block = document.getElementById("block");
block.style.border = "2px blue solid";
block.style.fontSize = "32px";

// 5 - работа с атрибутами

const link = document.querySelector(".menu li:first-child a");
console.log(link.href);
link.href = "https://suut.ural-campus.ru/nauka/"
