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
//     // перший: 6765, //!
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

// const bookShelf = {
// 	books: ['The Last Kingdom']
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
// }
// console.log('books_before:', bookShelf)

//todo: ✴️ var.1
//todo: Додавання до об'єкту метода "getBooks":

// const a = ''

// bookShelf.getBooks = "Java";

// function getBooks() {
// 	return this.books
// }

// bookShelf.getBooks = function () {
// 	return this.books
// }
// bookShelf.addBooks = function (bookName) {
// 	return this.books.push(bookName)
// }
// bookShelf.removeBooks = function (bookName) {
// 	const bookIndex = this.books.push(bookName)
// 	this.books.splice(bookIndex, 1)
// }

// console.log('books_before:', bookShelf)




//! ПРАКТИКА-13 (Урок-13_JS)
//todo [1]
// console.log(
//   "%c [1] ",
//   "color: yellow; background-color: #2274A5",
// );
// //? Деструктуризувати наступні об’єкти:
// // user
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// };

// const { name, age, email } = user;
// console.log("name: ",name); // 'John'
// console.log("age: ",age);   // 30
// console.log("email: ",email);   // 'john@example.com'

// // car
// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,
//     antilockBrakes: true,
//     stabilityControl: true
//   },
// };

// const {
// 	make, 
// 	model, 
// 	year, 
// 	features: [feature1, feature2, feature3], safety:{airbags, antilockBrakes, stabilityControl}
// } = car;

// console.log("make: ", make);
// console.log("model: ",model);
// console.log("year: ", year);
// console.log("feature1: ", feature1);
// console.log("feature2: ", feature2);
// console.log("feature3: ", feature3);

// console.log();
// console.log("safety: ", airbags, antilockBrakes, stabilityControl );


// // movie
// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   releaseYear: 1994,
//   ratings: {
//     imdb: 9.3,
//     rottenTomatoes: 90
//   },
// };

// // books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ],
// };
// //! Код виконаного завдання

// console.log("--------------------------------------------");

// books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ],
// };
// //! Код виконаного завдання
// const {
//   count, 
//   list: [
//     {title: title1,author: author1,year:year1},
//     {title: title2,author: author2,year:year2},
//     {title: title3,author: author3,year:year3}
//   ]
//   } = books;



// console.log("count: ", count);

// console.log("title1: ", title1);
// console.log("autor1: ", author1);
// console.log("year1: ", year1);

// console.log("title2: ", title2);
// console.log("autor2: ", author2);
// console.log("year2: ", year2);

// console.log("title3: ", title3);
// console.log("autor3: ", author3);
// console.log("year3: ", year3);


//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахуноку.
//! Код виконаного завдання
// const bankAccount = {
//   ownerName: "Jack Nicholson",
//   accountNumber: 1111222233334444,
//   balance: 10000,
// };

// console.log("bankAccount Before: ", bankAccount);


// bankAccount.deposit = function(money){
//   console.log("deposit");

//   this.balance += money;

//   console.log("Our balance: ", this.balance)

// };

// bankAccount.withdraw = function(money){
//   console.log("withdraw");

//   if(this.balance < money){
//     console.log("⛔️ Не достатньо коштів на вашому рахунку!")
//     return

//   }
//   this.balance -= money;

//   console.log("Our balance: ", this.balance)
  
// };

// console.log(bankAccount.deposit(500));
// console.log(bankAccount.withdraw(610));



// console.log("bankAccount after: ", bankAccount);


console.log("--------------------------------------------------");


//todo [6]
console.log(
  "%c [6] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
// {
//   id,
//   type,
//   amount
// }

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account = {
  //todo: Поточний баланс рахунку
  balance: 0,
  //todo:  Історія транзакцій
  transactions: [],

  //todo:  Метод створює і повертає об'єкт транзакції.
  //todo:  Приймає суму і тип транзакції.
  createTransaction(amount, type) {
    const transactionObj = {
      id: this.transactions.length + 1,
      type,//type: type
      amount//amount: amount
    }
    console.log(transactionObj);
    return
   },
  //todo:  Метод відповідає за додавання суми до балансу.
  //todo:  Приймає суму танзакції.
  //todo:  Викликає createTransaction для створення об'єкта транзакції
  //todo:  після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);


    this.transactions.push(newTransaction);
    console.log(this.transactions)

    return console.log('deposit')
   },

  //todo:  Метод відповідає за зняття суми з балансу.
  //todo:  Приймає суму танзакції.
  //todo:  Викликає createTransaction для створення об'єкта транзакції
  //todo:  після чого додає його в історію транзакцій.
  //todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
  //todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
  withdraw(amount) { 
    if (amount > this.balance) {
      result.textContent = 'Error, not enough money'
      return console.log('Error, not enough money')
     }

    this.balance -= amount;

    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);


    this.transactions.push(newTransaction);
    console.log(this.transactions)
    console.log(this.getBalance())
    return console.log('withdraw')
  },

  //todo:  Метод повертає поточний баланс
  getBalance() {
    return this.balance;
   },

  //todo:  Метод шукає і повертає об'єкт транзакції по id
  getTransactionDetails(id) { },

  //todo:  Метод повертає кількість коштів
  //todo:  певного типу транзакції з усієї історії транзакцій
  getTransactionTotal(type) { },
};
//! Код виконаного завдання
account.deposit(100);
account.deposit(100);
account.deposit(100);
account.deposit(100);

account.withdraw(100);
console.log("--------------------------------------------------");

// const currentTime = new Date();

// console.log("currentTime:", currentTime); //! Поточна дата та час

// const lessonStartTime = "Sat Feb 15 2025 13:00:00 GMT+0200";
// const lessonEndTime = "Sat Feb 15 2025 14:00:00 GMT+0200";

// while (currentTime >= lessonStartTime && currentTime < lessonEndTime) {
//     console.log(`«Менторська година» (додаткове заняття):`);
// };
