console.log('Lesson-17 JS');
//todo [1]
console.log(
	"%c [1] ",
	"color: yellow; background-color: #2274A5",
);
//? Створити розмітку з кнопкою та текстовим полем. 
//? За допомогою JavaScript отримати доступ до кнопки 
//? та текстового поля за їх ідентифікаторами 
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання
const inp = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // Отримуємо значення з текстового поля
  const val = inp.value;

  // Змінюємо текст кнопки на значення текстового поля
  btn.textContent = val;
});
console.log("--------------------------------------------------");



//todo [2]
console.log(
	"%c [2] ",
	"color: yellow; background-color: #2274A5",
);
//? Створити розмітку з заголовком та зображенням. 
//? За допомогою JavaScript отримати доступ до зображення 
//? та змінити значення атрибута "src" на шлях до іншого зображення.
//! Код виконаного завдання
const image = document.querySelector("#image");
// Змінюємо атрибут "src"
image.src = "https://images.pexels.com/photos/31187687/pexels-photo-31187687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
console.log("--------------------------------------------------");



//todo [3]
console.log(
	"%c [3] ",
	"color: yellow; background-color: #2274A5",
);
//? Створити розмітку  з посиланням та зображенням. 
//? За допомогою JavaScript отримати доступ до посилання 
//? та змінити значення атрибута "href" на нову URL-адресу. 
//? Також отримати доступ до зображення 
//? та додати новий атрибут "alt" з описом зображення.
//! Код виконаного завдання
const link = document.querySelector("#link");
link.href = "https://www.youtube.com/";

const image2 = document.querySelector("#image2");
image.alt = "Image Description";
console.log("--------------------------------------------------");



//todo [4]
console.log(
	"%c [4] ",
	"color: yellow; background-color: #2274A5",
);
//? Створити розмітку  зі списком елементів. 
//? За допомогою JavaScript отримати доступ 
//? до першого елемента списку 
//? та змінити його вміст на новий текст. 
//! Код виконаного завдання
const firstListItem = document.querySelector("ul li");
firstListItem.textContent = "Example";
console.log("--------------------------------------------------");
