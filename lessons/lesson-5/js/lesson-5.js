console.log('Lesson-5 JS');
console.log("213");
document.getElementById("drinkSelect").addEventListener('change', function(){
	const select = this.value;
	switch(select){
		case "Кава":
			alert("Ви обрали каву ☕");
			break;
		case "Чай":
			alert("Ви обрали чай 🍵");
			break;
		case "Сік":
			alert("Ви обрали сік 🍹");
			break;
		default:
			alert("Виберіть напій");
	}
});
document.getElementById("checkDay").addEventListener('click', function(){
	const day = document.getElementById("inputDayField").value.toLowerCase();
	
	switch (day){
		case "понеділок":
		case "вівторок":
		case "середа":
		case "четвер":
		case "п'ятниця":
			alert("Робочий день");
			break;
		case"субота":
		case"неділля":
			alert("Вихідні");
			break;
		default:
			alert("Введіть правильний день тижня.");
	}

});
document.getElementById("checkSeason").addEventListener('click', function(){
	const month = parseInt(document.getElementById("monthField").value);
	
	switch (true){
		case (month >= 1 && month <= 3):
			alert("Це зима ❄️");
			break;
		case (month >=4 && month <=6):
			alert("Це весна 🍃");
		case (month >=7 && month <=9):
			alert("Це літо ☀️");
			break;
		case (month >=10 && month <= 12):
			alert("Це осінь 🍂")
			break;
		default:
			alert("Введіть правильний номер місяця");
	}
});