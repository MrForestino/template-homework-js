document.getElementById("startScript").addEventListener("click", function() {
"use strict"
console.log('Lesson-2 JS');

//[1] Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`[1]\n Температура у фарангейтах: ${fahrenheit}`);

//[2] Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`[2]\n Годин у місяці: ${hoursInMonth}, хвилин у місяці: ${minutesInMonth}`);

//[3] Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

let health = 100;
let energy = 100;
health -= 20;
energy -= 50;

console.log(`[3]\n  На вашого персонажа напала змія 🐍, але він вдало відбився. \n Рівень здоров'я: ${health}; \n Рівень енергії: ${energy};`);

//[4] Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.

let purchaseAmount = 301;
let discount = purchaseAmount * 0.10;
let discountAmount = purchaseAmount - discount;

console.log(`[4]\n Сума зі знижкою: ${discountAmount}`)

//[5] Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.

let floatNumber = 3.14159265;
let normalNumber = Math.floor(floatNumber);
console.log(`[5]\n Округлене до меншого: ${normalNumber}`);

//[6] Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.

let strNumber = '123.45';
let parseNumber = parseFloat(strNumber);
console.log(`[6]\n Перетворено в десяткове число: ${parseNumber}`,'\n Перетворено в десяткове число: ', parseNumber);


//[7] Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
let intString = "123";
let parsInt = parseInt(intString);
console.log('[7]\n Перетворено в ціле число: ',parsInt);

//[8] Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

let number = 144;
let squareCount = Math.sqrt(number);
console.log('[8]\n Квадратний корінь: ',squareCount);

//[9] Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.

let intVal = 100;
let strVal = '200';
let convToInt = parseInt(strVal);
let convToStr = intVal.toString();
console.log('[9]\n Рядок перетворено у ціле число: ',convToInt, '\n Рядок перетворено у рядок: ',convToStr ); 
});