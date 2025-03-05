console.log('Lesson-16 JS');
// Обїєкт Навичок  {
// 	 Софтові навички (властивості):
// 	✨ Організація та планування
// 	✨ Самодисципліна.
// 	✨ Емпатія та активне слухання
// 	✨ Адаптивність та гнучкість
// 	✨ Критичне мислення та вирішення проблем

// 	// Фізичніі навички (методи):
// 	🛟 Керування автівкою
// 	🛟 Вміння плавати
// 	🛟 Стійкість до тривалих відряджень
// 	🛟 Морозостійкість
// 	🛟 Навички самозахисту без зброї
// }

// class User {
//     //todo: Тіло класу
// };

// const mango1 = new User();
// console.log("mango:", mango); //! {}

// class User1 {
// 	//todo:  Синтаксис оголошення методу класу:
// 	constructor(name, email) {
// 			//todo: Ініціалізація властивостей екземпляра:
// 			this.name = name;
// 			this.email = email;
// 	};
// };

//? Напиши клас User для створення користувача
//? з наступними властивостями:
//? name - рядок
//? age - число
//? followers - число
//? Додай метод getInfo(), який, виводить рядок:
//? User ${ім'я} is ${вік} years old and has ${кількість фоловерів}

class User {
	construction({name, age, followers}){
		this.name = name;
		this.age = age;
		this.followers = followers;
	};
	getInfo(){
		console.log(`User ${this.name} is ${this.age} years old and has ${this.followers}`);
	};
};

const mango = new User({
	name: "Mango",
	age: 2,
	followers: 20,
})
console.log("mango: ", mango)
