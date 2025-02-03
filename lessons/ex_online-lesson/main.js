// //! Приклад-алгоритм приготування кави за допомогою функції "Приготування кави"
// console.warn("Приклад функції \"Приготування кави\":");
// let groundCoffee;
// let hotWater;
// let coffee;

// //! 1 - функція "Приготування меленої кави"
// function makesGroundCoffee(ab) {
// 	// console.log(a);
// 	console.log(ab);

//     groundCoffee = ab;
//     console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
//     return groundCoffee;
// };

// //! 2 - функція "Приготування окропу (гарячої води)".
// function makesHotWater(b) {
//     hotWater = b;
//     console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
//     return hotWater;
// };

// //! 3 - функція "Приготування кави"
// function makingCoffee(a, b, callback1, callback2) {
// 	console.log(a, b);
// 	console.log(callback1);
// 	console.log(callback2);
//     if (!(callback1(a))) {
//         return "Потрібна мелена кава!";
//     };

//     if (!(callback2(b))) {
//         return "Потрібна гаряча вода!";
//     };

//     coffee = groundCoffee + hotWater;
//     coffee = "✅ Кава готова!"
//     return coffee;
// };

// console.log(makingCoffee("30 г", "250 ml", makesGroundCoffee, makesHotWater));

// console.log(makingCoffee); //передача посилання на функцію

// console.log("--------------------------------------------");

// //! Стрілкові(cтрілочні) функції
// console.warn("Стрілкові(cтрілочні) функції:");
// //? Стрілочні функції мають скорочений, лаконічніший синтаксис,
// //? що зменшує обсяг коду, особливо коли функція маленька
// //? або якщо вона використовується як колбек.
// //? Усі стрілки створюються як функціональний вираз (function expression),
// //? і якщо функція - не анонімна, її необхідно присвоювати змінній.
// //todo: Звичайне оголошення функції:
// function classicAdd(a, b, c) {
//     return a + b + c;
// };
// console.log("classicAdd(1, 2, 3);", classicAdd(1, 2, 3)); //! 6
// console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

// //? Якщо у стрілковій функції є декілька параметрів ,
// //? то вони перераховуються через кому в круглих дужках,
// //? так само, як в приладі з function classicAdd(a, b, c),
// //? між знаками дорівнює = та стрілкою =>.
// //todo: Оголошення функції стрілочною функцією (декілька параметрів):
// const arrowAdd = (a, b, c) => {
//     return a + b + c;
// };
// console.log("arrowAdd(10, 20, 30);", arrowAdd(10, 20, 30)); //! 60
// console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

// //? Якщо параметр один, його можна оголошувати без круглих дужок.
// //todo: Оголошення функції стрілочною функцією (один параметр):
// const add = a => {
//     return a + 5;
// };
// console.log("add(10);", add(10)); //! 15
// console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

// //? Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки..
// //todo: Оголошення функції стрілочною функцією (параметри відсутні):
// const greet = () => {
//     return "Привіт!"
// };

// console.log("greet();", greet()); //! 15
// console.log("-------------------------------------------------------");
// const array = [2, 21, 34, 89, 144];

// console.log("Array: ", array);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(`${i}: ${element}`);
// };
// //todo: Приклад-2: створення об'єкта:
// let object = {0: 2, 1: 21, 2: 34, 3: 89, 4: 144};

// //? Змінемо запис об'єкта не змінюючи його властивостей:
// object = {
//     0: 2,
//     1: 21,
//     2: 34,
//     3: 89,
//     4: 144
// };
// //? Замінемо "індекси"(властивості (properties)) на інші:
// const object2 = {
//     перший: 2,
//     другий: 21,
//     третій: 34,
//     четвертий: 89,
//     "п'ятий": 144,
//     // перший: 6765, //! ❓❓❓
// };
// //? Замінемо послідовність "індексів"(властивостей (properties))
// //? та їх знаачень на іншу:
// const object3 = {
//     "п'ятий": 144,
//     четвертий: 89,
//     перший: 2,
//     третій: 34,
//     другий: 21
// };

// let groundCoffee;
// let hotWater;
// let coffee;

// const makeCoffee = {
//     coffee: null,
//     makesGroundCoffee(weight){
//         const groundCoffee = weight;
//         console.log(!!groundCoffee);
//         return groundCoffee;
//     },
//     makesHotWater(volume){
//         const hotWater = volume;
//         console.log(!!hotWater);
//         return hotWater;
//     },
//     getCoffee(weight, volume){
//         this.coffee = this.makesGroundCoffee(weight) + "gr" + this.makesHotWater(volume) + "ml";
//         console.log(!!this.coffee);
//     }
// };
// console.log(makeCoffee.coffee);

// makeCoffee.getCoffee(30, 250)
// console.log(makeCoffee.coffee);

const bookShelf = {
	books: ['The Last Kingdom']
	// getBooks() {
	//     return this.books;
	// },
	// addBook(bookName) {
	//     this.books.push(bookName);
	// },
	// removeBook(bookName) {
	//     const bookIndex = this.books.indexOf(bookName);
	//     this.books.splice(bookIndex, 1);
	// },
}
console.log('books_before:', bookShelf)

//todo: ✴️ var.1
//todo: Додавання до об'єкту метода "getBooks":

const a = ''

// bookShelf.getBooks = "Java";

function getBooks() {
	return this.books
}

bookShelf.getBooks = function () {
	return this.books
}
bookShelf.addBooks = function (bookName) {
	return this.books.push(bookName)
}
bookShelf.removeBooks = function (bookName) {
	const bookIndex = this.books.push(bookName)
	this.books.splice(bookIndex, 1)
}

console.log('books_before:', bookShelf)
