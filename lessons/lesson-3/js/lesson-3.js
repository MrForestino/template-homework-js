"use strict"
document.getElementById("startScript").addEventListener("click", function() {
	console.log('Lesson-3 JS');

	const result = 5+5+'5';
	console.log(result)
	console.log(typeof result)

	const email = 'vb2526@gmail.com';
	const EmailHasAt = email.indexOf('@') !== -1;

	if(EmailHasAt){
		const EmailLenght = email.length;
		console.log(EmailLenght, EmailHasAt)
	}

	const my = "My";
	const name = "name";
	const is = "is";
	
	let fullName = `${my} ${name} ${is} `;
	
	fullName += 'Viktor';
	console.log(fullName);

	let UserName = 'Vladyslav';

	let payment = 300;
	
	alert(`Дякуємо, ${UserName}! До сплати ${payment} ₴ 💵`);
	});










//todo [2]
//? 2-1.За допомогою ключового слова const оголоси дві змінні:
//? productName - для зберігання назви товару (coffee),
//? productPrice - для зберігання ціни за одиницю товару.
//? Вивести в консоль одним рядком назву товара та його ціну
//? використовуючі різні варіанти виводу в консоль

// let productName = "cofee";
// let productPrice = 100;
// console.log("Name product:", productName,",","price:", productPrice);
// console.log("Name product: "+ productName + ", " + "price: "+ productPrice);
// console.log(`Name product:  ${productName},  price:  ${productPrice}`);


//? 2-2.Змінити ім'я товару на "Brazilian coffee"
//? та збільшили його ціну на 20%.
//? Перевизначити значення змінних productName 
//? і productPrice після їх оголошення.
//? У змінну productPrice записати математичну 
//? операцію яка збільшує її занення на 20%
//? Вивести в консоль одним рядком назву товара 
//? та його ціну будь якими способом

// productName = "Brazilian coffee";
// productPrice *= 1.2;
//productPrice = productPrice * 1.2 ;
// console.log(`Name product:  ${productName},  price:  ${productPrice}`);
