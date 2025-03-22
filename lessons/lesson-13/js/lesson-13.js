console.log('Lesson-13 JS');
//todo [1]
console.log(
	"%c [1] ",
	"color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true,
};

//! Код виконаного завдання
const {name, age, hobby, premium} = userA;
console.log("name: ",name);
console.log("age: ",age);
console.log("hobby: ",hobby);
console.log("premium: ",premium);
console.log("--------------------------------------------------");



//todo [2]
console.log(
	"%c [2] ",
	"color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name: 'Mango', age: 2 };
//! Код виконаного завдання
const {name: nameB, age: ageB} = userB;
console.log("name: ",nameB);
console.log("age: ",ageB);
console.log("--------------------------------------------------");



//todo [3]
console.log(
	"%c [3] ",
	"color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
	count: 11,
	employeePerformanceLists: [
			{
					ann: 29,
					david: 35,
					helen: 1,
					lorence: 99,
			},
			{
					poly: 12,
					mango: 17,
					ajax: 4,
			},
			{
					lux: 147,
					david: 21,
					kiwi: 19,
					chelsy: 38,
			}
	],
};
//! Код виконаного завдання
const {
	count,
	employeePerformanceLists: [
			{
					ann,
					david: david1,
					helen,
					lorence,
			},
			{
					poly,
					mango,
					ajax,
			},
			{
					lux,
					david: david2,
					kiwi,
					chelsy,
			}
	],
} = employeePerformance;
console.log("count: ", count);
console.log("ann: ", ann);
console.log("david: ", david1);
console.log("helen: ", helen);
console.log("lorence: ", lorence);
console.log("poly: ", poly);
console.log("mango: ", mango);
console.log("ajax: ", ajax);
console.log("lux: ", lux);
console.log("david: ", david2);
console.log("kiwi: ", kiwi);
console.log("chelsy: ", chelsy);
console.log("--------------------------------------------------");



//todo [4]
console.log(
	"%c [4] ",
	"color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
	count: 6,
	employeeSalaryLists: [
			{
					mango: 100,
					poly: 150,
					alfred: 80,
			},
			{
					kiwi: 200,
					lux: 50,
					chelsy: 150,
			}
	],
};
//! Код виконаного завдання
const  {
	count: count2,
	employeeSalaryLists: [
			{
					mango: mango2,
					poly: poly2,
					alfred,
			},
			{
					kiwi: kiwi2,
					lux: lux2,
					chelsy: chelsy2,
			}
	],
} = employeeSalaries;


console.log("count:", count2);
console.log("mango salary:", mango2);
console.log("poly salary:", poly2);
console.log("alfred salary:", alfred);
console.log("kiwi salary:", kiwi2);
console.log("lux salary:", lux2);
console.log("chelsy salary:", chelsy2);
console.log("--------------------------------------------------");



//todo [5]
console.log(
	"%c [5] ",
	"color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
	{
			name: 'Радар',
			price: 1300,
			quantity: 4
	},
	{
			name: 'Сканер',
			price: 2700,
			quantity: 3
	},
	{
			name: 'Дроїд',
			price: 400,
			quantity: 7
	},
	{
			name: 'Захоплення',
			price: 1200,
			quantity: 2
	},
];
//! Код виконаного завдання
const [
	{name: name1, price: price1, quantity: quantity1},
	{name: name2, price: price2, quantity: quantity2},
	{name: name3, price: price3, quantity: quantity3},
	{name: name4, price: price4, quantity: quantity4}
] = products;

console.log("Product 1:", name1, "| Price:", price1, "| Quantity:", quantity1);
console.log("Product 2:", name2, "| Price:", price2, "| Quantity:", quantity2);
console.log("Product 3:", name3, "| Price:", price3, "| Quantity:", quantity3);
console.log("Product 4:", name4, "| Price:", price4, "| Quantity:", quantity4);
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

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

// const account = {
// 	//todo: Поточний баланс рахунку
// 	balance: 0,
// 	//todo:  Історія транзакцій
// 	transactions: [],

// 	//todo:  Метод створює і повертає об'єкт транзакції.
// 	//todo:  Приймає суму і тип транзакції.
// 	createTransaction(amount, type) { },

// 	//todo:  Метод відповідає за додавання суми до балансу.
// 	//todo:  Приймає суму танзакції.
// 	//todo:  Викликає createTransaction для створення об'єкта транзакції
// 	//todo:  після чого додає його в історію транзакцій
// 	deposit(amount) { },

//     //todo:  Метод відповідає за зняття суми з балансу.
//     //todo:  Приймає суму танзакції.
//     //todo:  Викликає createTransaction для створення об'єкта транзакції
//     //todo:  після чого додає його в історію транзакцій.
//     //todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
//     //todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
//     withdraw(amount) { },

//     //todo:  Метод повертає поточний баланс
//     getBalance() { },

//     //todo:  Метод шукає і повертає об'єкт транзакції по id
//     getTransactionDetails(id) { },

//     //todo:  Метод повертає кількість коштів
//     //todo:  певного типу транзакції з усієї історії транзакцій
//     getTransactionTotal(type) { },
// };
//! Код виконаного завдання
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
