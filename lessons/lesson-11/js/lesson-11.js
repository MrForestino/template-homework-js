//todo [1]
console.log('%c [1] ', 'color: yellow; background-color: #2274A5')
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
const bankAccount = {
	ownerName: 'Pedro Diviroli',
	accountNumber: '487676382939087',
	balance: 203568139
}

bankAccount.deposit = function (money) {
	this.balance += money
	console.log(`Твій депозит: ${this.balance}`)
}
bankAccount.deposit(100000000)
console.log('Депозит: ', bankAccount.balance)

bankAccount.withdraw = function (money) {
	if (money > this.balance) {
		return console.log('⛔️ Помилка, недостатньо грошей для проведення транзакції!')
	 }
	this.balance -= money
	console.log(`Твій депозит: ${this.balance}`)
}
bankAccount.withdraw(403568139)
console.log('Депозит: ', bankAccount.balance)

console.log('--------------------------------------------------')

//todo [2]
console.log('%c [2] ', 'color: yellow; background-color: #2274A5')
//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем,
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія,
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія.
//? ✳️ Якщо метод повернув "true" вивести повідомлення
//? “Температура нижче 0 градусів Цельсія” і навпаки,
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання
const weather = {
    temperature: 3,
    humidity: 60,
    windSpeed: 10
};

weather.isBelowZero = function () {
    const temp = this.temperature;
    if (temp < 0) {
        console.log("Температура нижче 0 градусів Цельсія ❄️");
        return true;
    } else {
        console.log("Температура вище або дорівнює 0 градусів Цельсія 🌡️");
        return false;
    }
};
weather.isBelowZero();

console.log('--------------------------------------------------')
//todo [3]
console.log('%c [3] ', 'color: yellow; background-color: #2274A5')
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання
const user = {
	name: "Pedro",
	email: "pedrodiv@aey-corp.com",
	password: "PedroDiveroli123"
};

user.login = function () {
	let errors = [];

	if (this.name.length < 3) {
			errors.push("❌ Ім'я повинно містити не менше 3 символів");
	}
	if (!this.email.includes('@') || !this.email.includes('.')) {
			errors.push("❌ Некоректна електронна пошта");
	}
	if (this.password.length < 6) {
			errors.push("❌ Пароль повинен містити не менше 6 символів");
	}

	if (errors.length > 0) {
			console.log(errors.join("\n"));
	} else {
			console.log("✅ Логін успішний!");
			console.log(`Ім'я: ${this.name}`);
			console.log(`Email: ${this.email}`);
			console.log(`Пароль: ${this.password}`);
	}
};

user.login();
console.log('--------------------------------------------------')

//todo [4]
console.log('%c [4] ', 'color: yellow; background-color: #2274A5')
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання
const movie = {
	title: "The Intouchables",
	director: "Eric Toledano",
	year: 2011,
	rating: 8.8
};

// Додаємо метод перевірки рейтингу
movie.isHighlyRated = function () {
	return this.rating > 8;
};

// Виклик методу
const isTopRated = movie.isHighlyRated();

// Виводимо дані про фільм
console.log(`Рік випуску: ${movie.year}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рейтинг: ${movie.rating}`);

if (isTopRated) {
	console.log(`%c Назва: ${movie.title}`, "color: green; font-weight: bold");
} else {
	console.log(`%c Назва: ${movie.title}`, "color: red; font-weight: bold");
}

console.log('--------------------------------------------------')
