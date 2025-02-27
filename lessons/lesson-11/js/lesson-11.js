//todo [1]
console.log('%c [1] ', 'color: yellow; background-color: #2274A5')

const bankAccount = {
	ownerName: 'Pedro Diviroli',
	accountNumber: '487676382939087',
	balance: 203568139
}

bankAccount.deposit = function () {
	const moneyInput = prompt("Введіть суму для депозиту:").trim();
	const money = Number(moneyInput);

	if (!moneyInput || isNaN(money) || money <= 0) {
		console.log("⛔️ Некоректна сума! Будь ласка, введіть додатне число.");
		return;
	}
	this.balance += money;
	console.log(`Твій депозит: ${this.balance}`);
}
bankAccount.deposit();

bankAccount.withdraw = function () {
	const moneyInput = prompt("Введіть суму для зняття:").trim();
	const money = Number(moneyInput);

	if (!moneyInput || isNaN(money) || money <= 0) {
		console.log("⛔️ Некоректна сума! Будь ласка, введіть додатне число.");
		return;
	}
	if (money > this.balance) {
		console.log('⛔️ Помилка, недостатньо грошей для проведення транзакції!');
		return;
	}
	this.balance -= money;
	console.log(`Твій залишок: ${this.balance}`);
}
bankAccount.withdraw();


console.log('--------------------------------------------------')

//todo [2]
console.log('%c [2] ', 'color: yellow; background-color: #2274A5')

const weather = {
    temperature: null,
    humidity: 60,
    windSpeed: 10
};

do {
    const tempInput = prompt("Введіть температуру:").trim();
    const temp = Number(tempInput);

    if (!tempInput || isNaN(temp)) {
        console.log("⛔️ Некоректне значення! Будь ласка, введіть число.");
    } else {
        weather.temperature = temp;
        break;
    }
} while (true);

weather.isBelowZero = function () {
    if (this.temperature < 0) {
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
	name: "",
	email: "",
	password: ""
};

do {
	user.name = prompt("Введіть ім'я:").trim();
	if (!user.name || user.name.length < 3) {
		console.log("❌ Ім'я повинно містити не менше 3 символів");
	} else {
		break;
	}
} while (true);

do {
	user.email = prompt("Введіть email:").trim();
	if (!user.email || !user.email.includes('@') || !user.email.includes('.')) {
		console.log("❌ Некоректна електронна пошта");
	} else {
		break;
	}
} while (true);

do {
	user.password = prompt("Введіть пароль:").trim();
	if (!user.password || user.password.length < 6) {
		console.log("❌ Пароль повинен містити не менше 6 символів");
	} else {
		break;
	}
} while (true);

user.login = function () {
	console.log("✅ Логін успішний!");
	console.log(`Ім'я: ${this.name}`);
	console.log(`Email: ${this.email}`);
	console.log(`Пароль: ${this.password}`);
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
